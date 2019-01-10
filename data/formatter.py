import csv
from sklearn import preprocessing
import numpy as np

csv_file = open('Data.csv', 'rb')
csvFileArray = []
for row in csv.reader(csv_file, delimiter=','):
    csvFileArray.append(row)
print(csvFileArray[49])

averages = csvFileArray[49]

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

print bike_list
print len(bike_list)
print temp_list
print len(temp_list)
print wind_list
print len(wind_list)

titles = csvFileArray[0]
date_list = []

for i in range(len(titles)):
    if i % 5 == 4:
        title1 = titles[i]
        a = title1.split('@')
        title2 = a[1]
        b = title2.split('.')
        date_list.append(b[0])

print date_list
print len(date_list)

# Normalisation of variables

normalized_bike = preprocessing.normalize([bike_list])
normalized_temp = preprocessing.normalize([temp_list])
normalized_wind = preprocessing.normalize([wind_list])

print normalized_wind

addresses = []

print addresses

with open('data_averages.csv', mode='wb') as formatting:
    csv_writer = csv.writer(formatting, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    csv_writer.writerow(['Timestamp', 'Average Bikes in Use', 'Average Temperature', 'Average Wind Speed', 'Normalised Average Bikes in Use', 'Normalised Average Temperature', 'Normalised Average Wind Speed'])
    for i in range(len(temp_list)):
        x = [date_list[i], bike_list[i], temp_list[i], wind_list[i], normalized_bike[0, i], normalized_temp[0, i], normalized_wind[0, i]]
        csv_writer.writerow(x)

