import csv

csv_file = open('Data.csv', 'rb')
csvFileArray = []
for row in csv.reader(csv_file, delimiter=','):
    csvFileArray.append(row)
print(csvFileArray[49])

averages = csvFileArray[49]
titles = csvFileArray[0]

bike_list = []
temp_list = []
wind_list = []


for i in range(len(averages)):
    if i % 5 == 3:
        bike_list.append(float(averages[i]))
    if i % 5 == 4:
        temp_list.append(float(averages[i]))
    if i % 5 == 0:
        wind_list.append((averages[i]))

wind_list.remove('Average')

for i in range(len(wind_list)):
    wind_list[i] = float(wind_list[i])

print titles
print len(titles)
print bike_list
print len(bike_list)
print temp_list
print len(temp_list)
print wind_list
print len(wind_list)

bike_hour_00, bike_hour_01, bike_hour_02, bike_hour_03, bike_hour_04, bike_hour_05, bike_hour_06, bike_hour_07, bike_hour_08, bike_hour_09, bike_hour_10, bike_hour_11, bike_hour_12, bike_hour_13, bike_hour_14, bike_hour_15, bike_hour_16, bike_hour_17, bike_hour_18, bike_hour_19, bike_hour_20, bike_hour_21, bike_hour_22, bike_hour_23 = ([] for i in range(24))
temp_hour_00, temp_hour_01, temp_hour_02, temp_hour_03, temp_hour_04, temp_hour_05, temp_hour_06, temp_hour_07, temp_hour_08, temp_hour_09, temp_hour_10, temp_hour_11, temp_hour_12, temp_hour_13, temp_hour_14, temp_hour_15, temp_hour_16, temp_hour_17, temp_hour_18, temp_hour_19, temp_hour_20, temp_hour_21, temp_hour_22, temp_hour_23 = ([] for i in range(24))
wind_hour_00, wind_hour_01, wind_hour_02, wind_hour_03, wind_hour_04, wind_hour_05, wind_hour_06, wind_hour_07, wind_hour_08, wind_hour_09, wind_hour_10, wind_hour_11, wind_hour_12, wind_hour_13, wind_hour_14, wind_hour_15, wind_hour_16, wind_hour_17, wind_hour_18, wind_hour_19, wind_hour_20, wind_hour_21, wind_hour_22, wind_hour_23 = ([] for i in range(24))

date_list = []

for i in range(len(titles)):
    if i % 5 == 4:
        title1 = titles[i]
        a = title1.split('@')
        title2 = a[1]
        b = title2.split('.')
        date_list.append(b[0])

print(len(date_list))


for i in range(len(date_list)):
    title1 = date_list[i]
    a = title1.split(' ')
    # print a
    title2 = a[1]
    b = title2.split(':')
    # print(b[0])

    if str(b[0]) == "00":
        bike_hour_00.append(bike_list[i])
        temp_hour_00.append(temp_list[i])
        wind_hour_00.append(wind_list[i])
    if str(b[0]) == "01":
        bike_hour_01.append(bike_list[i])
        temp_hour_01.append(temp_list[i])
        wind_hour_01.append(wind_list[i])
    if str(b[0]) == "02":
        bike_hour_02.append(bike_list[i])
        temp_hour_02.append(temp_list[i])
        wind_hour_02.append(wind_list[i])
    if str(b[0]) == "03":
        bike_hour_03.append(bike_list[i])
        temp_hour_03.append(temp_list[i])
        wind_hour_03.append(wind_list[i])
    if str(b[0]) == "04":
        bike_hour_04.append(bike_list[i])
        temp_hour_04.append(temp_list[i])
        wind_hour_04.append(wind_list[i])
    if str(b[0]) == "05":
        bike_hour_05.append(bike_list[i])
        temp_hour_05.append(temp_list[i])
        wind_hour_05.append(wind_list[i])
    if str(b[0]) == "06":
        bike_hour_06.append(bike_list[i])
        temp_hour_06.append(temp_list[i])
        wind_hour_06.append(wind_list[i])
    if str(b[0]) == "07":
        bike_hour_07.append(bike_list[i])
        temp_hour_07.append(temp_list[i])
        wind_hour_07.append(wind_list[i])
    if str(b[0]) == "08":
        bike_hour_08.append(bike_list[i])
        temp_hour_08.append(temp_list[i])
        wind_hour_08.append(wind_list[i])
    if str(b[0]) == "09":
        bike_hour_09.append(bike_list[i])
        temp_hour_09.append(temp_list[i])
        wind_hour_09.append(wind_list[i])
    if str(b[0]) == "10":
        bike_hour_10.append(bike_list[i])
        temp_hour_10.append(temp_list[i])
        wind_hour_10.append(wind_list[i])
    if str(b[0]) == "11":
        bike_hour_11.append(bike_list[i])
        temp_hour_11.append(temp_list[i])
        wind_hour_11.append(wind_list[i])
    if str(b[0]) == "12":
        bike_hour_12.append(bike_list[i])
        temp_hour_12.append(temp_list[i])
        wind_hour_12.append(wind_list[i])
    if str(b[0]) == "13":
        bike_hour_13.append(bike_list[i])
        temp_hour_13.append(temp_list[i])
        wind_hour_13.append(wind_list[i])
    if str(b[0]) == "14":
        bike_hour_14.append(bike_list[i])
        temp_hour_14.append(temp_list[i])
        wind_hour_14.append(wind_list[i])
    if str(b[0]) == "15":
        bike_hour_15.append(bike_list[i])
        temp_hour_15.append(temp_list[i])
        wind_hour_15.append(wind_list[i])
    if str(b[0]) == "16":
        bike_hour_16.append(bike_list[i])
        temp_hour_16.append(temp_list[i])
        wind_hour_16.append(wind_list[i])
    if str(b[0]) == "17":
        bike_hour_17.append(bike_list[i])
        temp_hour_17.append(temp_list[i])
        wind_hour_17.append(wind_list[i])
    if str(b[0]) == "18":
        bike_hour_18.append(bike_list[i])
        temp_hour_18.append(temp_list[i])
        wind_hour_18.append(wind_list[i])
    if str(b[0]) == "19":
        bike_hour_19.append(bike_list[i])
        temp_hour_19.append(temp_list[i])
        wind_hour_19.append(wind_list[i])
    if str(b[0]) == "20":
        bike_hour_20.append(bike_list[i])
        temp_hour_20.append(temp_list[i])
        wind_hour_20.append(wind_list[i])
    if str(b[0]) == "21":
        bike_hour_21.append(bike_list[i])
        temp_hour_21.append(temp_list[i])
        wind_hour_21.append(wind_list[i])
    if str(b[0]) == "22":
        bike_hour_22.append(bike_list[i])
        temp_hour_22.append(temp_list[i])
        wind_hour_22.append(wind_list[i])
    if str(b[0]) == "23":
        bike_hour_23.append(bike_list[i])
        temp_hour_23.append(temp_list[i])
        wind_hour_23.append(wind_list[i])
    else:
        continue

csv_titles = []

for i in range(24):
    bike_x = "bike" + str(i)
    temp_x = "temp" + str(i)
    wind_x = "wind" + str(i)
    csv_titles.append(bike_x)
    csv_titles.append(temp_x)
    csv_titles.append(wind_x)

print csv_titles

with open('data_av_timesplit.csv', mode='wb') as formatting:
    csv_writer = csv.writer(formatting, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    csv_writer.writerow(csv_titles)
    for i in range(26):
        x = [bike_hour_00[i], temp_hour_00[i], wind_hour_00[i], bike_hour_01[i], temp_hour_01[i], wind_hour_01[i], bike_hour_02[i], temp_hour_02[i], wind_hour_02[i], bike_hour_03[i], temp_hour_03[i], wind_hour_03[i], bike_hour_04[i], temp_hour_04[i], wind_hour_04[i], bike_hour_05[i], temp_hour_05[i], wind_hour_05[i], bike_hour_06[i], temp_hour_06[i], wind_hour_06[i], bike_hour_07[i], temp_hour_07[i], wind_hour_07[i], bike_hour_08[i], temp_hour_08[i], wind_hour_08[i], bike_hour_09[i], temp_hour_09[i], wind_hour_09[i], bike_hour_10[i], temp_hour_10[i], wind_hour_10[i], bike_hour_11[i], temp_hour_11[i], wind_hour_11[i], bike_hour_12[i], temp_hour_12[i], wind_hour_12[i], bike_hour_13[i], temp_hour_13[i], wind_hour_13[i], bike_hour_14[i], temp_hour_14[i], wind_hour_14[i], bike_hour_15[i], temp_hour_15[i], wind_hour_15[i], bike_hour_16[i], temp_hour_16[i], wind_hour_16[i], bike_hour_17[i], temp_hour_17[i], wind_hour_17[i], bike_hour_18[i], temp_hour_18[i], wind_hour_18[i], bike_hour_19[i], temp_hour_19[i], wind_hour_19[i], bike_hour_20[i], temp_hour_20[i], wind_hour_20[i], bike_hour_21[i], temp_hour_21[i], wind_hour_21[i], bike_hour_22[i], temp_hour_22[i], wind_hour_22[i], bike_hour_23[i], temp_hour_23[i], wind_hour_23[i]]
        csv_writer.writerow(x)

print len(bike_hour_03)
