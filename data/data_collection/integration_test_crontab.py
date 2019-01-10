#!/use/bin/env python2.7

import json
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pyowm
import xml.etree.ElementTree as ET
import urllib2
import datetime
import time
import csv
# import sys

dock_t_list_loc = []
dock_w_list_loc = []
dock_r_list_loc = []
dock_wc_list_loc = []
dock_t_list_coord = []
dock_w_list_coord = []
dock_r_list_coord = []
dock_wc_list_coord = []

dock_loc_list = []
dock_lat_list = []
dock_long_list = []

weather_coordinates_list = []
weather_location_list = []


def init_tfl():
    # initialising access to TfL data
    url = 'https://tfl.gov.uk/tfl/syndication/feeds/cycle-hire/livecyclehireupdates.xml'  # define XML location
    req = urllib2.Request(url, headers={'User-Agent': "Magic Browser"})
    open_url = urllib2.urlopen(req)
    r = ET.parse(open_url)
    # print open_url.read()

    root = r.getroot()
    bicycle_usage = 0
    total_locations = len(root.getchildren())

    for k in range(total_locations):
        bicycle_usage += int(root[k][11].text)
        dock_lat = float(root[k][3].text)
        dock_long = float(root[k][4].text)
        dock_lat_list.append(dock_lat)
        dock_long_list.append(dock_long)
        dock_loc_list.append(root[k][1].text)

    # print 'Total_Docks', total_locations
    # print 'Total bicycles in use:', bicycle_usage
    return bicycle_usage, root


def init_weather():
    # initialising access to weather data
    owm = pyowm.OWM(API_key='056cb69dd50e6ac430a7331ecaf9c69e')
    return owm


def weather_location(location, list_name, owm):
    dock_obs = owm.weather_at_place(location)
    dock_weather = dock_obs.get_weather()
    dock_t = dock_weather.get_temperature(unit='celsius')
    dock_w = dock_weather.get_wind()
    dock_r = dock_weather.get_rain()
    if len(dock_r) == 0:
        dock_r = 0
    else:
        dock_r = dock_r
    dock_wc = dock_weather.get_weather_code()
    list_name.append((dock_t['temp'], dock_w['speed'], dock_r, dock_wc))
    # print list_name
    return list_name


def weather_coordinates(latitude, longitude, list_name, owm):
    dock_obs = owm.weather_at_coords(latitude, longitude)
    dock_weather = dock_obs.get_weather()
    dock_t = dock_weather.get_temperature(unit='celsius')
    dock_w = dock_weather.get_wind()
    dock_r = dock_weather.get_rain()
    if len(dock_r) == 0:
        dock_r = 0
    else:
        dock_r = dock_r
    dock_wc = dock_weather.get_weather_code()
    list_name.append((dock_t['temp'], dock_w['speed'], dock_r, dock_wc))
    # print list_name
    return list_name


def init_google():
    # initialising google sheet
    # getting permission to access google sheet
    json.load(open('creds.json'))  # json credentials you downloaded earlier
    scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']

    credentials = ServiceAccountCredentials.from_json_keyfile_name('creds.json', scope)  # get email and key from creds

    gc = gspread.authorize(credentials)  # authenticate with Google
    sheet = gc.open("Data").sheet1  # open sheet

    return sheet


def title_update(i_title, date_time, sheet):

    titles = ["Dock_Location", "Dock_Latitude", "Dock_Longitude", "Bike_Data", "Weather_Data @" + str(date_time)]
    weather_titles = ["Temperature", "Wind", "Rain", "Weather Code"]

    # bicycle title & total usage
    sheet.update_cell(1, 5 * (i_title + 1) - 1, titles[3])
    sheet.update_cell(1, 5 * (i_title + 1) + 0, titles[4])
    sheet.update_cell(2, 5 * (i_title + 1) + 0, weather_titles[0])
    sheet.update_cell(2, 5 * (i_title + 1) + 1, weather_titles[1])
    sheet.update_cell(2, 5 * (i_title + 1) + 2, weather_titles[2])
    sheet.update_cell(2, 5 * (i_title + 1) + 3, weather_titles[3])
    return None


def london_update(i_london, bicycle_usage, sheet, owm):

    weather_location_london = weather_location("London", weather_location_list, owm)
    sheet.update_cell(3, 5 * (i_london + 1) - 1, bicycle_usage)
    sheet.update_cell(3, 5 * (i_london + 1) + 0, weather_location_london[0][0])
    sheet.update_cell(3, 5 * (i_london + 1) + 1, weather_location_london[0][1])
    sheet.update_cell(3, 5 * (i_london + 1) + 2, weather_location_london[0][2])
    sheet.update_cell(3, 5 * (i_london + 1) + 3, weather_location_london[0][3])

    return None


def location_update(i_location, docks, sheet, root, owm):

    for j in range(docks):
        weather_coordinates(dock_lat_list[j], dock_long_list[j], weather_coordinates_list, owm)
        # print weather_coordinates_list[j]

    bicycle_cell_list = sheet.range(4, 5 * (i_location + 1) - 1, docks - 1, 5 * (i_location + 1) - 1)
    temp_cell_list = sheet.range(4, 5 * (i_location + 1) + 0, docks - 1, 5 * (i_location + 1) + 0)
    wind_cell_list = sheet.range(4, 5 * (i_location + 1) + 1, docks - 1, 5 * (i_location + 1) + 1)
    rain_cell_list = sheet.range(4, 5 * (i_location + 1) + 2, docks - 1, 5 * (i_location + 1) + 2)
    wc_cell_list = sheet.range(4, 5 * (i_location + 1) + 3, docks - 1, 5 * (i_location + 1) + 3)

    i_l = 0
    for cell in bicycle_cell_list:
        cell.value = int(root[i_l][11].text)
        i_l += 1
    sheet.update_cells(bicycle_cell_list)

    i_l = 0
    for cell in temp_cell_list:
        cell.value = weather_coordinates_list[i_l][0]
        i_l += 1
    sheet.update_cells(temp_cell_list)

    i_l = 0
    for cell in wind_cell_list:
        cell.value = weather_coordinates_list[i_l][1]
        i_l += 1
    sheet.update_cells(wind_cell_list)

    i_l = 0
    for cell in rain_cell_list:
        cell.value = weather_coordinates_list[i_l][2]
        i_l += 1
    sheet.update_cells(rain_cell_list)

    i_l = 0
    for cell in wc_cell_list:
        cell.value = weather_coordinates_list[i_l][3]
        i_l += 1
    sheet.update_cells(wc_cell_list)

    return None


def countdown(t):
    while t:
        mins, secs = divmod(t, 60)
        time_format = '{:02d}:{:02d}'.format(mins, secs)
        print time_format + '\r'
        time.sleep(1)
        t -= 1


def minute_second(seconds):
    mins, secs = divmod(int(seconds), 60)
    formatted_time = '{:02d}:{:02d}'.format(mins, secs)
    return formatted_time


def run():
    # t1_start = time.time()
    # freq = 60

    # t2_start = time.time()
    now = datetime.datetime.now()

    tfl = init_tfl()
    bicycle_usage_tfl = tfl[0]
    root_tfl = tfl[1]

    owm_weather = init_weather()

    sheet_data = init_google()

    columns = sheet_data.col_count
    # print "columns:", columns

    i = (columns - 3)/5

    sheet_data.resize(800, 3 + 5 * (i + 1))

    title_update(i, now, sheet_data)
    london_update(i, bicycle_usage_tfl, sheet_data, owm_weather)
    location_update(i, 50, sheet_data, root_tfl, owm_weather)

    # i += 1
    # t1_end = time.time()
    # t2_end = time.time()
    # t1_time = t1_end - t1_start
    # t2_time = t2_end - t2_start
    # print "Loop Number:", i
    # print "Total Run Time:", minute_second(t1_time)
    # print "Loop Run Time:", minute_second(t2_time)
    # columns = sheet_data.col_count
    # print "columns:", columns

    # countdown(freq)

    # export_file = sheet_data.export(format='xlsx')
    # print export_file
    # f = open('data_new.xlsx', 'wb')
    # f.write(export_file)
    # f.close()

    if columns % 15 == 3:
        with open("data_" + str(i) + ".csv", 'wb') as f:
            writer = csv.writer(f)
            writer.writerows(sheet_data.get_all_values())

    return None


if __name__ == '__main__':
    try:
        run()
    except Exception as e:
        print(e)
