package util

import (
    "fmt"
    "time"
)

func getDay(params CarInfo) string {
	dateLayout := "2006-01-02" 
    timeLayout := "15:04:05" 

	parsedDate, _ := time.Parse(dateLayout, params.Date)
    parsedTime, _ := time.Parse(timeLayout, params.Time)

	dateTime := time.Date(parsedDate.Year(), parsedDate.Month(), parsedDate.Day(), parsedTime.Hour(), parsedTime.Minute(), parsedTime.Second(), 0, time.UTC)
	fmt.Println(dateTime)
	day := dateTime.Weekday()
    return day.String()
	
}
