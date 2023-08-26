package util

import (
	//"fmt"
	"time"
	"github.com/gin-gonic/gin"
)

type CarInfo struct{
	Number string `json:"number"`
	DateTime `json:"datetime"`
}

type DateTime struct{
	Date DateYear
	Time time.Time

}

type DateYear struct {
	Year int
	Month int
	Day int
  }

func GetInfo(c *gin.Context){
	var info CarInfo
	var datetime DateTime
	var dateyear DateYear

	if err := c.ShouldBindJSON(&info); err != nil{
	c.JSON(400,gin.H{"error": err.Error()})
	}

	day := getDay(info,datetime,dateyear)
	c.JSON(200,gin.H{"day":day})
    
}