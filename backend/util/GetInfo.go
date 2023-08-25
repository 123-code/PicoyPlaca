package util

import (
	"fmt"
	"time"
)

type CarInfo struct{
	Number string `json:"phone"`
	DateTime
}

type DateTime struct{
	Date date
	Time time.Time

}

type date struct {
	Year int
	Month int
	Day int
  }

func GetInfo(){
info := CarInfo{
Number: "4450",
DateTime: DateTime{
	Date:date{
		Year: 2023,
		Month: 2,
		Day: 25,
	},
	Time:time.Now(),
},
}
fmt.Println(info.Date)
dt := DateTime{
	Time: time.Date(2023, 2, 25, 0, 0, 0, 0, time.UTC),
  }
  

  day := dt.Time.Weekday()
  
  fmt.Println(day)
}