package util

import (
	//"fmt"
	
	"time"

	"github.com/gin-gonic/gin"
)

type CarInfo struct {
    Number    string `json:"number"`
    Date      string `json:"date"`
    Time      string `json:"time"`
}


	type DateTime struct {
	Date DateYear `json:"date"`
	Time time.Time `json:"time"`
	}


	type DateYear struct {
	Year int `json:"year"`
	Month int `json:"month"`
	Day int `json:"day"`
	}

	
	

func GetInfo(c *gin.Context){
	
	var info CarInfo


	if err := c.BindJSON(&info); err != nil {
        c.JSON(400, gin.H{"error": err.Error()})
        return
    }
			day := getDay(info)
			if(day == "Saturday" || day == "Sunday"){
				c.JSON(200, gin.H{"allowed": true})
				c.JSON(200, gin.H{"restriction": false})
			} else
			{
		    c.JSON(200, gin.H{"restriction": true})
			//number := Slice(c,info);

			IsAllowed(c,info)



			}
			c.JSON(200, gin.H{"day": day})
    
}