package util

import (
	"fmt"
	"time"
)
// gets day of the week input date is in 
func getDay(params CarInfo,datetime DateTime,calendardate DateYear)string{
	info := CarInfo{
	Number: params.Number,
	DateTime: DateTime{
	Date:DateYear{
	Year: calendardate.Year,
	Month: calendardate.Month,
	Day: calendardate.Day,
			     },
	Time:time.Now(),
		},
		}

fmt.Println(info.Date)
dt := DateTime{
//Time: time.Date(2023, 2, 25, 0, 0, 0, 0, time.UTC),
}
day := dt.Time.Weekday()
  
return day.String()
}