//TIME BASED DATA
var time_trends = document.getElementById("time_trends").getContext('2d');
var line_time_trends = new Chart(time_trends, {
  type: 'line',
  data: {
    labels: ['2018-12-28 17:20:03', '2018-12-28 17:40:04', '2018-12-28 18:00:05', '2018-12-28 18:20:03', '2018-12-28 18:40:04', '2018-12-28 19:00:05', '2018-12-28 19:20:03', '2018-12-28 19:40:04', '2018-12-28 20:00:05', '2018-12-28 20:20:04', '2018-12-28 20:40:03', '2018-12-28 21:20:04', '2018-12-28 21:40:04', '2018-12-28 22:00:05', '2018-12-28 22:20:04', '2018-12-28 22:40:04', '2018-12-28 23:00:05', '2018-12-28 23:20:03', '2018-12-28 23:40:04', '2018-12-29 00:00:04', '2018-12-29 00:20:04', '2018-12-29 00:40:03', '2018-12-29 01:00:05', '2018-12-29 01:20:03', '2018-12-29 01:40:03', '2018-12-29 02:00:06', '2018-12-29 02:20:03', '2018-12-29 02:40:04', '2018-12-29 03:00:04', '2018-12-29 03:20:04', '2018-12-29 03:40:03', '2018-12-29 04:00:05', '2018-12-29 04:20:04', '2018-12-29 04:40:03', '2018-12-29 05:00:05', '2018-12-29 05:20:04', '2018-12-29 05:40:04', '2018-12-29 06:00:04', '2018-12-29 06:20:04', '2018-12-29 06:40:04', '2018-12-29 07:00:05', '2018-12-29 07:20:04', '2018-12-29 07:40:04', '2018-12-29 08:00:05', '2018-12-29 08:20:03', '2018-12-29 08:40:04', '2018-12-29 09:00:05', '2018-12-29 09:20:03', '2018-12-29 09:40:03', '2018-12-29 10:00:05', '2018-12-29 10:20:03', '2018-12-29 10:40:03', '2018-12-29 11:00:06', '2018-12-29 11:20:03', '2018-12-29 11:40:04', '2018-12-29 12:00:04', '2018-12-29 12:20:04', '2018-12-29 12:40:03', '2018-12-29 13:00:06', '2018-12-29 13:20:03', '2018-12-29 13:40:04', '2018-12-29 14:00:05', '2018-12-29 14:20:04', '2018-12-29 14:40:04', '2018-12-29 15:20:04', '2018-12-29 15:40:03', '2018-12-29 16:00:05', '2018-12-29 16:20:03', '2018-12-29 16:40:04', '2018-12-29 17:00:05', '2018-12-29 17:20:03', '2018-12-29 17:40:03', '2018-12-29 18:00:05', '2018-12-29 18:20:03', '2018-12-29 18:40:03', '2018-12-29 19:00:05', '2018-12-29 19:20:04', '2018-12-29 19:40:04', '2018-12-29 20:00:05', '2018-12-29 20:20:04', '2018-12-29 20:40:03', '2018-12-29 21:00:04', '2018-12-29 21:20:03', '2018-12-29 21:40:04', '2018-12-29 22:00:05', '2018-12-29 22:20:03', '2018-12-29 22:40:03', '2018-12-29 23:00:05', '2018-12-29 23:20:03', '2018-12-29 23:40:03', '2018-12-30 00:00:05', '2018-12-30 00:20:03', '2018-12-30 12:40:04', '2018-12-30 13:00:05', '2018-12-30 13:20:04', '2018-12-30 13:40:04', '2018-12-30 14:00:05', '2018-12-30 14:20:04', '2018-12-30 14:40:04', '2018-12-30 15:00:05', '2018-12-30 15:20:04', '2018-12-30 15:40:03', '2018-12-30 16:00:06', '2018-12-30 16:20:03', '2018-12-30 16:40:04', '2018-12-30 17:00:05', '2018-12-30 17:20:03', '2018-12-30 17:40:04', '2018-12-30 18:00:05', '2018-12-30 18:20:03', '2018-12-30 18:40:04', '2018-12-30 19:00:04', '2018-12-30 19:20:04', '2018-12-30 19:40:03', '2018-12-30 20:00:05', '2018-12-30 20:20:04', '2018-12-30 20:40:03', '2018-12-30 21:00:05', '2018-12-30 21:20:03', '2018-12-30 21:40:03', '2018-12-30 22:00:05', '2018-12-30 22:20:04', '2018-12-30 22:40:04', '2018-12-30 23:00:04', '2018-12-30 23:20:03', '2018-12-30 23:40:03', '2018-12-31 00:00:05', '2018-12-31 00:20:04', '2018-12-31 00:40:03', '2018-12-31 01:00:06', '2018-12-31 01:20:03', '2018-12-31 01:40:04', '2018-12-31 02:00:05', '2018-12-31 02:20:04', '2018-12-31 02:40:04', '2018-12-31 03:00:06', '2018-12-31 03:20:04', '2018-12-31 03:40:03', '2018-12-31 04:00:06', '2018-12-31 04:20:03', '2018-12-31 04:40:04', '2018-12-31 05:00:05', '2018-12-31 05:20:03', '2018-12-31 05:40:04', '2018-12-31 06:00:05', '2018-12-31 06:20:04', '2018-12-31 06:40:04', '2018-12-31 07:00:05', '2018-12-31 07:20:04', '2018-12-31 07:40:03', '2018-12-31 08:00:05', '2018-12-31 08:20:04', '2018-12-31 08:40:04', '2018-12-31 09:00:05', '2018-12-31 09:20:03', '2018-12-31 09:40:03', '2018-12-31 10:00:05', '2018-12-31 10:20:03', '2018-12-31 10:40:04', '2018-12-31 11:00:05', '2018-12-31 11:20:03', '2018-12-31 11:40:04', '2018-12-31 12:00:05', '2018-12-31 12:20:04', '2018-12-31 12:40:03', '2018-12-31 13:00:07', '2018-12-31 14:20:04', '2018-12-31 14:40:03', '2018-12-31 15:00:05', '2018-12-31 15:20:03', '2018-12-31 15:40:04', '2018-12-31 16:00:05', '2018-12-31 16:20:04', '2018-12-31 16:40:03', '2018-12-31 17:00:06', '2018-12-31 17:20:03', '2018-12-31 17:40:03', '2018-12-31 18:00:05', '2018-12-31 18:20:04', '2018-12-31 18:40:04', '2018-12-31 19:00:05', '2018-12-31 19:20:03', '2018-12-31 19:40:03', '2018-12-31 20:00:05', '2018-12-31 20:20:03', '2018-12-31 20:40:03', '2018-12-31 21:00:05', '2018-12-31 21:20:04', '2018-12-31 21:40:04', '2018-12-31 22:00:05', '2018-12-31 22:20:04', '2018-12-31 22:40:03', '2018-12-31 23:00:05', '2018-12-31 23:20:03', '2018-12-31 23:40:04', '2019-01-01 00:00:04', '2019-01-01 00:20:03', '2019-01-01 00:40:04', '2019-01-01 01:20:03', '2019-01-01 01:40:03', '2019-01-01 02:00:05', '2019-01-01 02:20:03', '2019-01-01 02:40:03', '2019-01-01 03:00:05', '2019-01-01 03:20:03', '2019-01-01 03:40:04', '2019-01-01 04:00:05', '2019-01-01 04:20:03', '2019-01-01 04:40:04', '2019-01-01 05:00:05', '2019-01-01 05:20:04', '2019-01-01 05:40:04', '2019-01-01 06:00:05', '2019-01-01 06:20:04', '2019-01-01 06:40:03', '2019-01-01 07:00:04', '2019-01-01 07:20:03', '2019-01-01 07:40:03', '2019-01-01 08:00:05', '2019-01-01 08:20:03', '2019-01-01 08:40:04', '2019-01-01 09:00:05', '2019-01-01 09:20:03', '2019-01-01 09:40:03', '2019-01-01 10:00:04', '2019-01-01 10:20:04', '2019-01-01 10:40:03', '2019-01-01 11:00:05', '2019-01-01 11:20:03', '2019-01-01 11:40:04', '2019-01-01 12:00:05', '2019-01-01 12:20:03', '2019-01-01 12:40:03', '2019-01-01 13:00:05', '2019-01-01 13:20:04', '2019-01-01 13:40:04', '2019-01-01 14:00:05', '2019-01-01 14:20:04', '2019-01-01 14:40:04', '2019-01-01 15:00:05', '2019-01-01 15:20:03', '2019-01-01 15:40:03', '2019-01-01 16:00:05', '2019-01-01 16:20:03', '2019-01-01 16:40:04', '2019-01-01 17:00:05', '2019-01-01 17:20:04', '2019-01-01 17:40:03', '2019-01-01 18:00:05', '2019-01-01 18:20:03', '2019-01-01 18:40:04', '2019-01-01 19:00:05', '2019-01-01 19:20:03', '2019-01-01 19:40:03', '2019-01-01 20:00:05', '2019-01-01 20:20:03', '2019-01-01 20:40:03', '2019-01-01 21:00:04', '2019-01-01 21:20:04', '2019-01-01 21:40:03', '2019-01-01 22:00:05', '2019-01-01 22:20:04', '2019-01-01 22:40:03', '2019-01-01 23:00:05', '2019-01-01 23:20:04', '2019-01-01 23:40:04', '2019-01-02 00:00:06', '2019-01-02 00:20:03', '2019-01-02 00:40:03', '2019-01-02 01:00:06', '2019-01-02 01:20:04', '2019-01-02 01:40:03', '2019-01-02 02:00:05', '2019-01-02 02:20:03', '2019-01-02 02:40:03', '2019-01-02 03:00:05', '2019-01-02 03:20:04', '2019-01-02 03:40:03', '2019-01-02 04:00:04', '2019-01-02 04:20:03', '2019-01-02 04:40:03', '2019-01-02 05:00:04', '2019-01-02 05:20:03', '2019-01-02 05:40:04', '2019-01-02 06:00:05', '2019-01-02 06:20:04', '2019-01-02 06:40:03', '2019-01-02 07:00:06', '2019-01-02 07:20:04', '2019-01-02 07:40:03', '2019-01-02 08:00:05', '2019-01-02 08:20:03', '2019-01-02 08:40:04', '2019-01-02 09:00:04', '2019-01-02 09:20:03', '2019-01-02 09:40:03', '2019-01-02 10:00:06', '2019-01-02 10:20:03', '2019-01-02 10:40:04', '2019-01-02 11:00:05', '2019-01-02 11:20:03', '2019-01-02 11:40:04', '2019-01-02 12:00:05', '2019-01-02 12:20:04', '2019-01-02 12:40:03', '2019-01-02 13:00:04', '2019-01-02 13:20:03', '2019-01-02 13:40:03', '2019-01-02 14:00:05', '2019-01-02 14:20:03', '2019-01-02 14:40:03', '2019-01-02 15:00:07', '2019-01-02 15:20:04', '2019-01-02 16:40:04', '2019-01-02 17:00:05', '2019-01-02 17:20:03', '2019-01-02 17:40:04', '2019-01-02 18:00:05', '2019-01-02 18:20:05', '2019-01-02 18:40:03', '2019-01-02 19:00:06', '2019-01-02 19:20:04', '2019-01-02 19:40:03', '2019-01-02 20:00:05', '2019-01-02 20:20:03', '2019-01-02 20:40:03', '2019-01-02 21:00:05', '2019-01-02 21:20:04', '2019-01-02 21:40:03', '2019-01-02 22:00:04', '2019-01-02 22:20:03', '2019-01-02 22:40:03', '2019-01-02 23:00:03', '2019-01-02 23:20:03', '2019-01-02 23:40:04', '2019-01-03 00:00:03', '2019-01-03 00:20:04', '2019-01-03 00:40:03', '2019-01-03 01:00:03', '2019-01-03 01:20:04', '2019-01-03 01:40:03', '2019-01-03 02:00:03', '2019-01-03 02:20:03', '2019-01-03 02:40:03', '2019-01-03 03:00:03', '2019-01-03 03:20:04', '2019-01-03 03:40:03', '2019-01-03 04:00:03', '2019-01-03 04:20:03', '2019-01-03 04:40:03', '2019-01-03 05:00:03', '2019-01-03 05:20:03', '2019-01-03 05:40:04', '2019-01-03 06:00:03', '2019-01-03 06:20:03', '2019-01-03 06:40:03', '2019-01-03 07:00:04', '2019-01-03 07:20:03', '2019-01-03 07:40:03', '2019-01-03 08:00:03', '2019-01-03 08:20:03', '2019-01-03 08:40:04', '2019-01-03 09:00:04', '2019-01-03 09:20:04', '2019-01-03 09:40:03', '2019-01-03 10:00:04', '2019-01-03 10:20:03', '2019-01-03 10:40:04', '2019-01-03 11:00:04', '2019-01-03 11:20:03', '2019-01-03 11:40:03', '2019-01-03 12:00:03', '2019-01-03 12:20:03', '2019-01-03 12:40:03', '2019-01-03 13:00:03', '2019-01-03 13:20:03', '2019-01-03 13:40:03', '2019-01-03 14:00:03', '2019-01-03 14:20:03', '2019-01-03 14:40:03', '2019-01-03 15:00:03', '2019-01-03 15:20:04', '2019-01-03 15:40:03', '2019-01-03 16:00:04', '2019-01-03 16:20:03', '2019-01-03 16:40:03', '2019-01-03 17:00:03', '2019-01-03 17:20:03', '2019-01-03 17:40:04', '2019-01-03 18:00:03', '2019-01-03 18:20:03', '2019-01-03 18:40:04', '2019-01-03 19:00:04', '2019-01-03 19:20:03', '2019-01-03 19:40:03', '2019-01-03 20:00:03', '2019-01-03 20:20:04', '2019-01-03 20:40:03', '2019-01-03 21:00:04', '2019-01-03 21:20:04', '2019-01-03 21:40:03', '2019-01-03 22:00:04', '2019-01-03 22:20:03', '2019-01-03 22:40:04', '2019-01-03 23:00:03', '2019-01-03 23:20:03', '2019-01-03 23:40:03', '2019-01-04 00:00:04', '2019-01-04 00:20:03', '2019-01-04 00:40:04', '2019-01-04 01:00:03', '2019-01-04 01:20:03', '2019-01-04 01:40:03', '2019-01-04 02:00:03', '2019-01-04 02:20:03', '2019-01-04 02:40:03', '2019-01-04 03:00:03', '2019-01-04 03:20:03', '2019-01-04 03:40:03', '2019-01-04 04:00:03', '2019-01-04 04:20:03', '2019-01-04 04:40:03', '2019-01-04 05:00:03', '2019-01-04 05:20:03', '2019-01-04 05:40:04', '2019-01-04 06:00:03', '2019-01-04 06:20:03', '2019-01-04 06:40:03', '2019-01-04 07:00:03', '2019-01-04 07:20:03', '2019-01-04 07:40:03', '2019-01-04 08:00:03', '2019-01-04 08:20:03', '2019-01-04 08:40:03', '2019-01-04 09:00:04', '2019-01-04 09:20:03', '2019-01-04 09:40:03', '2019-01-04 10:00:03', '2019-01-04 10:20:03', '2019-01-04 10:40:03', '2019-01-04 11:00:03', '2019-01-04 11:20:03', '2019-01-04 11:40:03', '2019-01-04 12:00:03', '2019-01-04 12:20:04', '2019-01-04 12:40:03', '2019-01-04 13:00:03', '2019-01-04 13:20:03', '2019-01-04 13:40:03', '2019-01-04 14:00:03', '2019-01-04 14:20:03', '2019-01-04 14:40:03', '2019-01-04 15:00:03', '2019-01-04 15:20:04', '2019-01-04 15:40:03', '2019-01-04 16:20:03', '2019-01-04 16:40:03', '2019-01-04 17:00:03', '2019-01-04 17:20:03', '2019-01-04 17:40:03', '2019-01-04 18:00:03', '2019-01-04 18:20:03', '2019-01-04 18:40:03', '2019-01-04 19:00:03', '2019-01-04 19:20:03', '2019-01-04 19:40:03', '2019-01-04 20:00:03', '2019-01-04 20:20:03', '2019-01-04 20:40:04', '2019-01-04 21:00:03', '2019-01-04 21:20:03', '2019-01-04 21:40:03', '2019-01-04 22:00:03', '2019-01-04 22:20:04', '2019-01-04 22:40:03', '2019-01-04 23:00:03', '2019-01-04 23:20:03', '2019-01-04 23:40:03', '2019-01-05 00:00:03', '2019-01-05 00:20:03', '2019-01-05 00:40:03', '2019-01-05 01:00:03', '2019-01-05 01:20:03', '2019-01-05 01:40:04', '2019-01-05 02:00:03', '2019-01-05 02:20:03', '2019-01-05 02:40:03', '2019-01-05 03:00:03', '2019-01-05 03:20:03', '2019-01-05 03:40:03', '2019-01-05 04:00:03', '2019-01-05 04:20:03', '2019-01-05 04:40:03', '2019-01-05 05:00:03', '2019-01-05 05:20:03', '2019-01-05 05:40:04', '2019-01-05 06:00:03', '2019-01-05 06:20:03', '2019-01-05 06:40:03', '2019-01-05 07:00:04', '2019-01-05 07:20:03', '2019-01-05 07:40:03', '2019-01-05 08:00:03', '2019-01-05 08:20:03', '2019-01-05 08:40:03', '2019-01-05 09:00:03', '2019-01-05 09:20:03', '2019-01-05 09:40:03', '2019-01-05 10:00:03', '2019-01-05 10:20:03', '2019-01-05 10:40:03', '2019-01-05 11:00:03', '2019-01-05 11:20:04', '2019-01-05 11:40:03', '2019-01-05 12:00:03', '2019-01-05 12:20:03', '2019-01-05 12:40:03', '2019-01-05 13:00:03', '2019-01-05 13:20:03', '2019-01-05 13:40:03', '2019-01-05 14:00:03', '2019-01-05 14:20:03', '2019-01-05 14:40:03', '2019-01-05 15:00:03', '2019-01-05 15:20:03', '2019-01-05 15:40:03', '2019-01-05 16:00:03', '2019-01-05 16:20:03', '2019-01-05 16:40:03', '2019-01-05 17:00:03', '2019-01-05 17:20:03', '2019-01-05 17:40:03', '2019-01-05 18:00:03', '2019-01-05 18:20:03', '2019-01-05 18:40:03', '2019-01-05 19:00:03', '2019-01-05 19:20:03', '2019-01-05 19:40:03', '2019-01-05 20:00:03', '2019-01-05 20:20:03', '2019-01-05 20:40:03', '2019-01-05 21:00:03', '2019-01-05 21:20:03', '2019-01-05 21:40:03', '2019-01-05 22:00:04', '2019-01-05 22:20:03', '2019-01-05 22:40:03', '2019-01-05 23:00:03', '2019-01-05 23:20:03', '2019-01-05 23:40:03', '2019-01-06 00:00:03', '2019-01-06 00:20:04', '2019-01-06 00:40:03', '2019-01-06 01:00:03', '2019-01-06 01:20:03', '2019-01-06 01:40:03', '2019-01-06 02:00:03', '2019-01-06 02:20:03', '2019-01-06 02:40:03', '2019-01-06 03:00:03', '2019-01-06 03:20:04', '2019-01-06 03:40:03', '2019-01-06 04:00:03', '2019-01-06 04:20:04', '2019-01-06 04:40:03', '2019-01-06 05:00:03', '2019-01-06 05:20:03', '2019-01-06 05:40:03', '2019-01-06 06:00:03', '2019-01-06 06:20:03', '2019-01-06 06:40:03', '2019-01-06 07:00:03', '2019-01-06 07:20:03', '2019-01-06 07:40:03', '2019-01-06 08:00:03', '2019-01-06 08:20:04', '2019-01-06 08:40:03', '2019-01-06 09:00:03', '2019-01-06 09:20:03', '2019-01-06 09:40:03', '2019-01-06 10:00:03', '2019-01-06 10:20:04', '2019-01-06 10:40:03', '2019-01-06 11:00:03', '2019-01-06 11:20:03', '2019-01-06 11:40:03', '2019-01-06 12:00:03', '2019-01-06 12:20:03', '2019-01-06 12:40:04', '2019-01-06 13:00:03', '2019-01-06 13:20:03', '2019-01-06 13:40:03', '2019-01-06 14:00:03', '2019-01-06 14:20:03', '2019-01-06 14:40:03', '2019-01-06 15:00:03', '2019-01-06 15:20:03', '2019-01-06 15:40:03', '2019-01-06 16:00:03', '2019-01-06 16:20:04', '2019-01-06 16:40:03', '2019-01-06 17:00:03', '2019-01-06 17:20:03', '2019-01-06 17:40:03', '2019-01-06 18:00:04', '2019-01-06 18:20:04', '2019-01-06 18:40:03', '2019-01-06 19:00:03', '2019-01-06 19:20:03', '2019-01-06 19:40:04', '2019-01-06 20:00:03', '2019-01-06 20:20:03', '2019-01-06 20:40:04', '2019-01-06 21:00:03', '2019-01-06 21:20:03', '2019-01-06 21:40:03', '2019-01-06 22:00:03', '2019-01-06 22:20:03', '2019-01-06 22:40:03', '2019-01-06 23:00:03', '2019-01-06 23:20:03', '2019-01-06 23:40:03', '2019-01-07 00:00:03', '2019-01-07 00:20:03', '2019-01-07 00:40:04', '2019-01-07 01:00:03', '2019-01-07 01:20:03', '2019-01-07 01:40:03', '2019-01-07 02:00:03', '2019-01-07 02:20:04', '2019-01-07 02:40:04', '2019-01-07 03:00:03', '2019-01-07 03:20:04', '2019-01-07 03:40:03', '2019-01-07 04:00:03', '2019-01-07 04:20:03', '2019-01-07 04:40:03', '2019-01-07 05:00:03', '2019-01-07 05:20:04', '2019-01-07 05:40:03', '2019-01-07 06:00:03', '2019-01-07 06:20:03', '2019-01-07 06:40:04', '2019-01-07 07:00:03', '2019-01-07 07:20:03', '2019-01-07 07:40:03', '2019-01-07 08:00:03', '2019-01-07 08:20:03', '2019-01-07 08:40:03', '2019-01-07 09:00:03', '2019-01-07 09:20:04', '2019-01-07 09:40:03', '2019-01-07 10:00:03', '2019-01-07 10:20:03', '2019-01-07 10:40:03', '2019-01-07 11:00:03', '2019-01-07 11:20:03', '2019-01-07 11:40:03', '2019-01-07 12:00:03', '2019-01-07 12:20:03', '2019-01-07 12:40:03', '2019-01-07 13:00:03', '2019-01-07 13:20:03', '2019-01-07 13:40:03', '2019-01-07 14:00:03', '2019-01-07 14:20:03', '2019-01-07 14:40:04', '2019-01-07 15:00:03', '2019-01-07 15:20:03', '2019-01-07 15:40:03', '2019-01-07 16:00:03', '2019-01-07 16:20:03', '2019-01-07 16:40:03', '2019-01-07 17:00:03', '2019-01-07 17:20:03', '2019-01-07 17:40:03', '2019-01-07 18:00:04', '2019-01-07 18:20:03', '2019-01-07 18:40:03', '2019-01-07 19:00:03']
,
    datasets: [{
        data: [14.54, 14.35, 14.35, 14.46, 14.61, 14.61, 14.61, 14.67, 14.67, 14.67, 14.67, 14.98, 15.11, 14.59, 14.54, 14.26, 14.26, 14.22, 14.35, 14.35, 14.35, 14.22, 14.22, 14.04, 13.89, 13.89, 13.96, 14.07, 14.09, 14.07, 14.09, 14.09, 13.96, 14.0, 14.0, 13.83, 13.83, 13.54, 13.5, 13.5, 13.5, 13.46, 13.5, 13.5, 13.46, 13.7, 13.7, 13.78, 14.33, 14.59, 14.46, 14.52, 14.52, 14.76, 14.63, 14.63, 14.85, 14.89, 14.59, 14.61, 14.43, 14.48, 14.22, 14.15, 13.87, 13.87, 13.87, 13.85, 13.48, 13.48, 13.63, 13.46, 13.46, 13.46, 13.2, 13.2, 13.07, 13.09, 13.02, 12.91, 12.87, 12.87, 13.11, 13.13, 12.89, 12.85, 12.72, 13.0, 12.91, 12.8, 12.8, 12.87, 14.11, 14.0, 13.93, 14.48, 14.48, 14.11, 14.61, 14.61, 14.78, 14.89, 14.89, 14.63, 14.37, 14.37, 14.8, 14.63, 14.63, 14.61, 14.67, 14.8, 14.63, 14.54, 14.54, 14.43, 14.28, 14.28, 14.2, 14.26, 14.28, 14.43, 14.35, 14.35, 14.48, 14.43, 14.43, 14.61, 14.37, 14.48, 14.48, 14.48, 14.37, 14.43, 14.39, 14.74, 14.24, 14.28, 14.33, 14.37, 14.37, 14.3, 14.33, 14.33, 14.24, 14.17, 14.2, 14.2, 14.26, 14.39, 14.39, 13.93, 14.37, 14.37, 13.8, 13.7, 13.59, 13.74, 13.89, 13.89, 13.96, 13.76, 13.76, 13.85, 14.02, 14.02, 13.35, 13.17, 13.17, 13.41, 13.39, 13.65, 13.65, 13.65, 13.65, 13.22, 13.41, 13.41, 13.17, 12.96, 12.96, 13.33, 13.57, 13.57, 14.07, 14.07, 14.09, 14.0, 13.7, 13.67, 13.39, 13.39, 13.39, 13.3, 13.48, 13.74, 13.78, 14.04, 14.0, 13.93, 13.74, 13.57, 13.65, 13.63, 13.63, 13.65, 13.65, 13.61, 13.65, 13.43, 13.26, 13.3, 13.35, 13.41, 13.41, 13.41, 13.41, 13.8, 13.67, 13.48, 13.52, 13.74, 14.17, 14.17, 14.17, 14.24, 14.11, 14.11, 13.91, 14.17, 14.17, 14.5, 14.46, 14.91, 14.54, 14.54, 14.54, 15.26, 15.52, 15.57, 15.67, 15.8, 15.8, 15.17, 15.09, 15.09, 14.87, 14.83, 14.67, 14.63, 14.67, 14.67, 14.76, 14.5, 14.5, 14.57, 14.52, 14.52, 14.33, 14.22, 14.07, 14.15, 14.15, 14.15, 14.13, 14.07, 14.07, 14.02, 13.91, 13.91, 14.0, 13.98, 13.98, 13.98, 14.0, 14.0, 14.02, 14.02, 14.0, 14.04, 14.04, 14.04, 14.0, 14.0, 14.0, 14.02, 14.24, 14.24, 14.41, 14.57, 14.57, 14.3, 14.04, 13.07, 12.28, 11.8, 11.33, 11.41, 11.72, 11.72, 12.02, 11.85, 11.85, 11.93, 11.76, 11.76, 12.0, 11.8, 11.8, 12.26, 11.48, 11.48, 11.09, 12.48, 12.57, 13.65, 14.22, 14.22, 15.5, 15.5, 15.5, 15.48, 15.59, 16.07, 16.13, 16.37, 16.39, 16.3, 16.28, 15.98, 15.76, 15.78, 15.8, 15.74, 15.65, 15.65, 15.67, 15.76, 15.76, 15.78, 15.78, 15.78, 15.8, 15.8, 15.83, 15.78, 15.83, 15.83, 15.89, 15.93, 15.93, 15.91, 15.91, 15.91, 15.96, 16.17, 16.17, 16.17, 16.63, 17.37, 16.74, 16.5, 16.5, 13.78, 13.78, 12.48, 12.07, 11.59, 11.67, 11.5, 11.76, 11.76, 11.96, 12.52, 12.52, 11.87, 11.87, 11.87, 11.63, 12.2, 12.17, 12.37, 12.5, 12.5, 12.76, 12.85, 12.85, 13.85, 13.78, 13.78, 13.78, 15.17, 15.17, 14.93, 15.07, 15.07, 15.5, 15.54, 15.54, 15.46, 15.07, 15.07, 14.7, 14.52, 14.57, 14.59, 14.59, 14.54, 14.22, 14.26, 14.28, 14.3, 14.22, 14.26, 14.26, 14.3, 14.3, 14.35, 14.33, 14.33, 14.35, 14.33, 14.85, 14.98, 14.98, 14.89, 14.89, 15.04, 15.04, 15.04, 15.89, 15.76, 15.11, 15.22, 14.52, 12.74, 12.11, 12.11, 11.09, 10.76, 11.09, 11.28, 11.28, 11.28, 12.33, 12.63, 12.63, 12.61, 12.5, 12.5, 12.0, 12.04, 12.04, 11.65, 11.8, 13.17, 13.26, 13.26, 13.26, 14.74, 14.74, 14.74, 14.74, 14.74, 14.74, 14.83, 14.83, 14.76, 14.7, 14.7, 14.98, 14.98, 14.37, 14.35, 14.63, 14.59, 14.59, 14.5, 14.5, 14.5, 14.52, 14.52, 14.63, 14.63, 14.63, 14.87, 14.87, 14.87, 14.98, 14.96, 14.89, 14.87, 14.85, 14.85, 15.15, 14.93, 14.91, 14.85, 14.83, 14.83, 14.8, 14.74, 14.74, 14.89, 14.98, 14.98, 15.37, 15.89, 15.89, 15.96, 15.87, 16.02, 16.09, 15.67, 15.67, 14.89, 15.37, 15.3, 15.28, 15.37, 15.37, 15.26, 15.28, 15.28, 15.57, 15.8, 15.85, 15.93, 15.93, 15.93, 15.52, 15.5, 15.5, 15.04, 15.09, 14.96, 14.96, 14.96, 14.96, 14.98, 14.87, 14.87, 14.76, 14.63, 14.63, 14.57, 14.57, 14.5, 14.43, 14.43, 14.43, 14.41, 14.46, 14.52, 14.7, 14.8, 14.85, 14.89, 14.91, 14.91, 14.93, 15.02, 15.0, 15.02, 15.2, 15.13, 15.15, 15.17, 15.17, 15.15, 15.15, 15.13, 15.13, 14.87, 14.87, 14.65, 14.83, 14.74, 15.02, 14.63, 14.63, 14.85, 14.83, 15.07, 15.15, 15.15, 15.15, 15.07, 14.63, 14.63, 14.59, 14.41, 14.41, 14.02, 14.22, 14.28, 14.26, 13.93, 13.93, 13.85, 13.67, 13.59, 13.59, 13.5, 13.5, 13.5, 13.5, 13.37, 13.37, 13.74, 13.8, 13.63, 13.39, 13.39, 13.65, 13.65, 13.65, 13.63, 13.63, 13.63, 13.63, 13.63, 13.57, 13.46, 13.46, 13.7, 13.72, 13.72, 13.72, 13.72, 13.72, 13.72, 13.74, 13.87, 13.87, 13.87, 13.87, 13.87, 13.39, 13.39, 13.39, 13.46, 13.46, 13.46, 13.46, 13.89, 14.17, 14.87, 14.07, 12.85, 12.22, 12.46, 11.78, 11.37, 11.48, 11.48, 11.57, 11.65, 11.89, 12.02, 12.07, 12.07, 12.5, 12.46, 12.46, 12.26, 12.09, 12.09, 12.52, 12.59, 12.26, 12.67, 12.67, 12.67, 13.63, 14.52, 15.39, 16.13, 16.46, 16.02]
,
        label: "Average Bikes in Use",
        borderColor: "#3e95cd",
        fill: true
      }, {
        data: [8.46, 8.29, 8.29, 8.29, 8.29, 8.29, 8.29, 8.2, 8.2, 8.2, 8.2, 8.23, 8.1, 8.1, 8.05, 8.33, 8.33, 8.44, 8.45, 8.45, 8.45, 8.68, 8.68, 8.26, 8.35, 8.35, 8.65, 8.66, 8.66, 8.76, 8.76, 8.76, 8.76, 8.97, 8.97, 9.08, 9.08, 9.19, 9.23, 9.34, 9.34, 9.22, 9.34, 9.34, 9.3, 9.16, 9.16, 9.49, 9.18, 9.57, 9.84, 10.2, 10.2, 10.4, 10.72, 10.72, 10.9, 11.38, 11.38, 11.59, 11.72, 11.72, 11.72, 11.72, 11.89, 11.89, 11.89, 11.59, 11.53, 11.53, 11.28, 11.0, 11.0, 11.0, 10.11, 10.11, 9.81, 9.78, 9.56, 9.34, 8.82, 8.82, 8.48, 8.05, 7.9, 7.77, 6.88, 6.72, 6.62, 7.03, 7.03, 7.03, 9.65, 9.65, 9.64, 9.82, 9.82, 9.81, 10.0, 10.0, 9.99, 9.9, 9.89, 9.9, 10.0, 10.0, 10.0, 9.8, 9.8, 9.8, 9.8, 9.8, 9.8, 9.72, 9.72, 9.91, 9.91, 9.91, 9.82, 9.58, 9.67, 9.76, 9.76, 9.76, 9.76, 9.76, 9.76, 9.76, 9.65, 9.66, 9.65, 9.65, 9.38, 9.43, 9.45, 9.38, 9.34, 9.11, 9.11, 9.0, 8.89, 8.7, 8.61, 8.65, 8.52, 8.43, 8.58, 8.58, 8.49, 8.51, 8.51, 8.46, 8.46, 8.46, 8.61, 8.82, 8.85, 8.9, 9.0, 9.0, 9.19, 9.41, 9.41, 9.41, 9.41, 9.41, 9.36, 9.34, 9.34, 9.1, 9.09, 9.09, 9.0, 9.0, 9.0, 8.91, 8.91, 8.91, 8.75, 8.6, 8.6, 8.46, 8.58, 8.58, 8.43, 8.43, 8.58, 8.58, 8.43, 8.43, 8.43, 8.43, 8.43, 8.43, 8.36, 8.38, 8.43, 8.34, 8.23, 8.25, 8.28, 8.35, 8.35, 8.35, 8.35, 8.25, 8.25, 8.12, 8.0, 7.69, 7.44, 7.32, 7.4, 7.44, 6.62, 6.62, 6.62, 6.8, 6.73, 6.99, 7.53, 7.5, 7.49, 7.49, 7.49, 7.99, 8.41, 8.41, 9.11, 9.51, 9.51, 9.91, 10.15, 10.1, 10.02, 10.02, 10.02, 9.92, 9.93, 9.93, 9.92, 9.74, 9.74, 9.09, 8.82, 8.82, 8.82, 8.28, 8.28, 8.1, 7.46, 7.46, 7.28, 6.81, 6.81, 6.54, 6.37, 6.37, 6.1, 5.87, 5.72, 5.57, 5.57, 5.05, 5.37, 4.51, 4.51, 4.4, 4.06, 4.06, 4.19, 4.0, 3.94, 3.94, 3.69, 3.67, 3.66, 3.66, 3.76, 3.67, 3.4, 3.4, 3.58, 3.18, 3.18, 3.38, 3.55, 3.55, 3.29, 3.21, 3.21, 3.26, 3.59, 3.65, 3.76, 3.64, 3.67, 3.86, 4.48, 4.51, 4.57, 4.95, 4.95, 5.03, 5.11, 5.11, 5.23, 5.48, 5.48, 5.47, 5.49, 5.49, 5.17, 4.93, 4.93, 4.84, 4.73, 4.73, 4.77, 4.77, 4.77, 4.44, 4.64, 4.64, 4.27, 4.37, 4.36, 4.36, 4.12, 4.06, 4.02, 3.93, 3.92, 3.91, 3.91, 3.97, 3.91, 3.91, 3.91, 3.69, 3.69, 3.69, 3.66, 3.66, 3.65, 3.66, 3.44, 3.44, 3.26, 3.56, 3.5, 3.44, 3.44, 3.44, 3.54, 3.4, 3.4, 3.4, 3.35, 3.48, 3.58, 3.35, 3.35, 3.48, 3.48, 3.55, 3.82, 3.92, 3.92, 4.15, 4.39, 4.39, 4.39, 4.29, 4.29, 4.62, 4.62, 4.62, 4.33, 4.39, 4.37, 4.29, 4.48, 4.48, 4.24, 3.87, 3.87, 3.87, 3.87, 3.87, 3.87, 3.83, 3.83, 3.63, 3.66, 3.66, 3.43, 2.88, 2.88, 2.43, 2.43, 2.43, 2.3, 2.31, 2.31, 2.12, 2.12, 2.21, 2.12, 2.12, 1.88, 1.62, 1.57, 1.44, 1.22, 1.22, 1.21, 1.45, 1.44, 1.44, 1.44, 1.22, 1.21, 1.44, 1.44, 1.56, 1.56, 1.36, 1.32, 1.32, 0.26, 0.01, -0.35, -0.46, -0.56, -0.76, -0.69, -0.69, -0.34, 0.66, 1.17, 1.8, 1.8, 1.8, 2.56, 2.95, 2.95, 3.19, 3.27, 3.27, 3.1, 3.07, 3.07, 2.71, 2.71, 2.66, 2.2, 2.2, 2.2, 1.99, 1.99, 1.99, 1.99, 1.99, 1.99, 1.33, 1.33, 1.41, 1.66, 1.66, 1.74, 1.74, 1.53, 2.11, 2.19, 2.11, 2.0, 2.36, 2.36, 2.91, 2.93, 2.92, 2.91, 2.91, 2.91, 3.13, 3.24, 3.25, 3.23, 3.25, 3.25, 3.23, 3.25, 3.25, 3.47, 3.41, 3.43, 3.47, 3.7, 3.7, 4.03, 4.03, 4.03, 3.44, 3.89, 3.89, 3.66, 3.83, 3.83, 3.74, 3.74, 3.61, 3.5, 3.82, 3.82, 3.9, 4.09, 4.09, 4.17, 4.41, 4.41, 4.4, 4.41, 4.41, 4.46, 4.64, 4.64, 4.64, 4.64, 4.64, 4.64, 4.31, 4.31, 4.74, 4.51, 4.51, 4.51, 4.51, 4.51, 4.62, 4.72, 4.73, 4.81, 5.03, 5.03, 4.91, 4.91, 5.02, 5.02, 5.02, 5.02, 5.0, 5.01, 5.12, 5.22, 5.14, 5.21, 5.24, 5.34, 5.26, 5.22, 5.26, 5.25, 5.25, 5.43, 5.43, 5.44, 5.26, 5.26, 5.33, 5.33, 5.25, 5.25, 5.76, 5.76, 5.59, 5.72, 5.72, 5.59, 6.0, 6.0, 6.25, 6.41, 6.41, 7.01, 7.01, 7.01, 7.92, 8.02, 8.02, 8.16, 8.64, 8.64, 8.91, 8.91, 8.91, 8.91, 8.91, 8.91, 8.91, 8.82, 8.78, 8.78, 8.55, 8.55, 8.55, 8.55, 8.19, 8.19, 8.04, 8.12, 8.15, 7.91, 7.82, 7.73, 7.73, 7.73, 7.52, 7.52, 7.52, 7.52, 7.52, 7.08, 7.17, 7.17, 7.22, 7.11, 7.11, 7.45, 7.37, 7.37, 7.62, 7.61, 7.77, 7.77, 7.77, 7.77, 7.77, 7.86, 7.86, 7.86, 7.99, 7.99, 7.99, 7.99, 7.63, 7.68, 7.72, 7.91, 7.88, 7.78, 7.93, 8.04, 8.35, 8.41, 8.41, 8.95, 9.06, 9.11, 9.51, 9.51, 9.51, 9.51, 9.81, 9.81, 9.9, 9.9, 9.9, 10.27, 10.27, 10.27, 10.36, 10.36, 10.36, 10.51, 10.37, 10.36, 10.65, 10.31, 10.31]
,
        label: "Temperature",
        borderColor: "#8e5ea2",
        fill: true
      }, {
        data: [2.13, 2.85, 2.85, 2.49, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.35, 2.6, 2.6, 3.36, 2.1, 2.1, 2.6, 3.1, 3.1, 3.1, 3.1, 3.1, 1.5, 2.1, 2.1, 2.6, 2.6, 2.6, 3.6, 3.1, 3.1, 2.6, 3.6, 3.6, 4.1, 4.1, 5.28, 4.6, 4.6, 4.6, 5.66, 6.2, 6.2, 4.63, 5.7, 5.7, 5.14, 5.1, 5.45, 5.66, 5.7, 5.7, 6.23, 6.7, 6.7, 6.8, 6.2, 6.2, 6.3, 6.2, 6.5, 6.68, 5.41, 6.17, 6.17, 6.17, 4.1, 3.6, 3.6, 4.1, 4.6, 4.6, 4.6, 4.35, 4.35, 3.99, 4.1, 3.77, 3.6, 3.46, 3.46, 2.46, 1.88, 1.96, 2.1, 2.1, 2.1, 2.1, 3.1, 3.1, 3.1, 4.34, 4.34, 4.34, 4.1, 4.1, 4.1, 3.6, 3.6, 4.03, 5.1, 4.48, 3.57, 2.6, 2.6, 3.1, 3.6, 3.6, 2.32, 3.1, 3.1, 2.99, 2.59, 2.59, 4.6, 4.6, 4.6, 4.1, 2.84, 3.23, 2.6, 3.6, 3.6, 4.6, 3.6, 3.6, 3.1, 2.1, 2.52, 2.6, 2.6, 2.77, 2.6, 3.1, 2.77, 2.6, 3.6, 3.64, 3.6, 3.1, 3.77, 4.1, 4.6, 4.03, 3.6, 3.1, 3.1, 3.21, 3.85, 3.85, 2.53, 2.6, 2.6, 2.32, 2.6, 2.83, 3.1, 2.1, 2.1, 3.57, 2.6, 2.6, 2.6, 2.1, 2.1, 4.07, 4.1, 4.1, 3.67, 4.1, 4.52, 4.6, 4.6, 4.6, 3.17, 4.1, 4.1, 3.35, 3.22, 3.22, 3.35, 4.21, 4.21, 3.6, 3.6, 3.97, 3.72, 3.85, 4.15, 4.1, 4.1, 4.1, 4.6, 3.1, 4.26, 4.6, 6.2, 5.1, 3.6, 3.67, 3.84, 3.84, 3.92, 3.96, 4.1, 4.1, 5.1, 4.6, 3.9, 3.6, 4.6, 4.24, 4.1, 2.6, 2.6, 2.6, 3.6, 3.6, 2.2, 4.1, 3.68, 2.93, 2.93, 2.93, 2.82, 3.85, 3.85, 5.07, 4.6, 4.6, 4.1, 5.1, 5.2, 5.14, 5.14, 5.14, 4.63, 6.2, 6.13, 5.63, 5.1, 5.1, 5.03, 4.1, 4.1, 3.1, 2.6, 2.59, 2.6, 2.6, 2.6, 2.6, 3.1, 3.1, 2.1, 3.1, 3.1, 2.1, 2.6, 2.95, 3.1, 3.1, 2.96, 2.6, 2.6, 2.6, 2.6, 2.48, 2.48, 2.1, 2.1, 2.32, 2.32, 2.1, 2.4, 2.6, 2.6, 2.34, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.1, 2.1, 2.1, 2.6, 2.6, 2.6, 2.6, 3.1, 3.1, 3.03, 3.6, 3.37, 3.07, 3.6, 3.4, 3.1, 3.1, 3.1, 3.13, 3.1, 3.1, 2.67, 3.6, 3.6, 3.13, 2.6, 2.6, 3.07, 2.6, 2.48, 2.5, 2.6, 2.6, 2.1, 2.1, 2.1, 3.03, 2.1, 2.1, 2.5, 2.1, 2.1, 2.1, 2.1, 2.37, 2.6, 2.6, 2.48, 2.6, 2.1, 2.1, 1.5, 2.1, 2.1, 1.5, 1.5, 1.5, 1.0, 1.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.5, 1.25, 1.0, 1.0, 1.0, 1.5, 2.1, 2.1, 2.1, 1.5, 1.5, 1.54, 1.0, 1.0, 1.5, 1.5, 1.38, 1.11, 1.8, 1.83, 2.22, 2.05, 2.05, 2.6, 2.05, 2.05, 2.1, 2.1, 2.1, 2.21, 2.05, 2.03, 2.49, 1.5, 1.5, 2.53, 2.1, 2.1, 2.13, 2.6, 2.6, 2.6, 2.6, 2.6, 1.57, 1.5, 1.5, 1.57, 1.5, 1.5, 1.5, 1.5, 1.5, 1.12, 1.0, 1.0, 1.54, 1.54, 0.5, 0.5, 0.5, 1.0, 1.16, 1.17, 1.0, 1.01, 2.92, 1.5, 1.43, 1.43, 0.5, 0.5, 1.0, 1.0, 1.5, 1.5, 1.5, 1.5, 2.07, 1.5, 1.5, 1.5, 1.5, 2.06, 1.7, 1.5, 1.54, 1.22, 1.22, 1.0, 1.0, 1.5, 2.1, 2.1, 2.1, 3.57, 3.99, 3.99, 3.17, 3.97, 3.97, 4.07, 3.26, 3.26, 2.6, 2.23, 1.2, 0.92, 0.92, 0.92, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 3.6, 3.6, 2.6, 3.1, 3.1, 3.1, 3.1, 1.8, 2.6, 2.6, 2.38, 2.1, 2.1, 2.1, 3.1, 4.1, 3.85, 3.6, 3.6, 3.6, 3.6, 2.58, 3.58, 4.6, 4.1, 4.1, 4.1, 3.1, 3.1, 3.6, 3.6, 3.06, 2.6, 3.6, 3.6, 3.5, 3.1, 3.1, 3.6, 2.6, 2.6, 4.13, 4.1, 4.1, 3.67, 4.1, 4.28, 4.21, 4.1, 4.1, 3.63, 3.6, 3.34, 3.13, 3.1, 3.1, 3.6, 3.6, 3.6, 4.03, 3.1, 3.14, 3.07, 2.6, 2.6, 3.07, 3.35, 3.35, 3.03, 3.1, 3.05, 3.05, 3.05, 3.05, 2.85, 2.35, 3.05, 3.1, 3.1, 3.1, 2.6, 2.6, 2.87, 2.6, 2.6, 2.6, 2.1, 2.6, 3.12, 3.6, 4.1, 3.43, 3.1, 2.6, 2.6, 2.6, 2.1, 2.39, 2.6, 3.34, 3.02, 2.84, 3.1, 3.1, 2.6, 2.6, 3.1, 3.1, 3.6, 3.6, 1.63, 2.85, 2.85, 1.74, 2.6, 2.6, 2.02, 2.85, 2.85, 3.57, 3.57, 3.57, 3.13, 3.1, 3.1, 2.7, 2.6, 2.6, 2.13, 3.1, 3.1, 2.93, 3.6, 3.6, 2.46, 2.1, 2.19, 2.19, 2.6, 2.6, 2.6, 2.6, 3.72, 3.72, 2.84, 2.14, 1.5, 1.5, 1.84, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 1.83, 1.5, 1.5, 2.44, 2.6, 2.6, 2.6, 2.6, 2.6, 1.72, 1.5, 2.1, 2.1, 2.1, 2.1, 2.1, 2.6, 2.6, 2.6, 3.1, 3.1, 3.1, 3.1, 4.1, 4.1, 4.13, 4.6, 4.78, 4.38, 6.2, 5.33, 4.17, 5.1, 5.1, 5.26, 5.1, 5.1, 5.03, 6.2, 6.2, 6.59, 5.65, 5.65, 6.3, 5.7, 5.7, 6.6, 6.2, 6.2, 6.1, 6.1, 6.1, 6.63, 6.82, 6.82, 7.45, 8.0, 8.0]
,
        label: "Wind Speed",
        borderColor: "#3cba9f",
        fill: true
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Average Santander Bikes in Use per Dock vs Average Temperature & Wind Speed at Docks'
    }
  }
});

//MAP BASED TRENDS
var map_trends = document.getElementById("map_trends")
var bubble_map_trends = new Chart(map_trends, {
      type: 'bubble',
      data: {
      datasets: [
        {
          label: ["River Street , Clerkenwell"],
          backgroundColor: "rgba(255,0,0,0.5)",
          borderColor: "rgba(255,0,0,1)",
          data: [{
            x: -0.109970527,
            y: 51.52916347,
            r: 11
          }]
        }, {
          label: ["Phillimore Gardens, Kensington"],
          backgroundColor: "rgba(255,0,0,0.5)",
          borderColor: "rgba(255,0,0,1)",
          data: [{
            x: -0.197574246,
            y: 51.49960695,
            r: 17
          }]
        }, {
          label: ["Christopher Street, Liverpool Street"],
          backgroundColor: "rgba(255,0,0,0.5)",
          borderColor: "rgba(255,0,0,1)",
          data: [{
            x: -0.084605692,
            y: 51.52128377,
            r: 16
          }]
        }, {
          label: ["St. Chad's Street, King's Cross"],
          backgroundColor: "rgba(255,0,0,0.5)",
          borderColor: "rgba(255,0,0,1)",
          data: [{
            x: -0.120973687,
            y: 51.53005939,
            r: 3
          }]
        }
      ]
    },
    options: {
      legend: {
        display: false
      },

      title: {
        display: true,
        text: 'Temperature at Santander Bike Docks'
      }, scales: {
        yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Latitude"
            },

            ticks: {
                min: 51.29,
                max: 51.7
            }

        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Longitude"
          },
          ticks: {
                min: -0.52,
                max: 0.31
          }

        }]
      }
    }
});

//CSV DATA
function parseData(createGraph){
    Papa.parse("https://raw.githubusercontent.com/sanish96/DE4-SIOT/master/data/Data.csv", {
        download: true,
        complete: function(results){
            createGraph(results.data)
        },
        error: function(err){
            console.log(err)
        }
    })
}


function createGraph(data){
    console.log(data)

    var raw_temp = document.getElementById('rawTemp').getContext('2d');

    // Buffers for storing the selected array data for making chart
    var time = [];
    var temp = [];

    for (var i = 1; i <data.length; i++){
        time.push(data[49][5*i-2]);
        temp.push(data[49][5*i-1]);
    }

    console.log(time);
    console.log(temp);

    var raw_data = {
        labels: time,
        datasets: [{
            label: "Temperature in Celsius",
            fill: false,
            backgroundColor: red,
            borderColor: red,
            data: temp
        }]
    }

    var c = []

    for(var i=0;i<time.length;i++)
        {
            var obj = {x:temp[i],y:time[i]};
            c.push(obj);
        }


    var chart_raw_temp = new Chart(raw_temp,{
        type: 'scatter',
        data:{
            datasets: [{label: "Average Bike Hire at Different Temperatures",
                showLine: false,
                fill: false,
                data: c
            }]
        }
    });
}
parseData(createGraph)

var blue = 'rgb(0, 132, 180)';
var orange = 'rgb(180, 102, 0)';
var red = 'rgb(180, 12, 0)';
