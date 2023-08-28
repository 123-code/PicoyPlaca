package util

import (
    "fmt"
    "time"
	"github.com/gin-gonic/gin"
)

func getDay(c *gin.Context,params CarInfo) string {
	dateLayout := "2006-01-02" 
    timeLayout := "15:04:05" 

	parsedDate, _ := time.Parse(dateLayout, params.Date)
    parsedTime, _ := time.Parse(timeLayout, params.Time)

	dateTime := time.Date(parsedDate.Year(), parsedDate.Month(), parsedDate.Day(), parsedTime.Hour(), parsedTime.Minute(), parsedTime.Second(), 0, time.UTC)
	
	day := dateTime.Weekday()
	fmt.Println(day)
	if(day.String() == "Saturday" || day.String() == "Sunday"){
		c.JSON(200, gin.H{"move": true})
	}
		
    return day.String()
	
	
}
