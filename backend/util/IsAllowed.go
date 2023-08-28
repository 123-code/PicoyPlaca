package util
import (
"time"
"fmt"
"github.com/gin-gonic/gin"
)

/* based on request parameters, returns true if a car can circulate, 
false if it can't 
*/
func IsAllowed(c *gin.Context,params CarInfo){
	/*
	lunes 1y2
	martes 3y4
	miercoles 5y6
	jueves 7y8
	viernes 9y0
	*/

	DaysOfWeek := map[string][]string{
		"Monday":    {"1", "2"},
		"Tuesday":   {"3", "4"},
		"Wednesday": {"5", "6"},
		"Thursday":  {"7", "8"},
		"Friday":    {"9", "0"},
	}
	day := getDay(params)
	inputTimeStr := params.Time
	LastNumberSlice := Slice(c,params)
	var move bool


	inputTime,err := time.Parse("15:04:05", inputTimeStr)
	if (err != nil){
		fmt.Println("Error parsing time:", err)
		return
	}
	morningStart, _ := time.Parse("15:04", "07:30")
	morningEnd, _   := time.Parse("15:04", "09:30")
	eveningStart, _ := time.Parse("15:04", "16:30")
	eveningEnd, _   := time.Parse("15:04", "19:30")

	// conditional checks wether we are on a pico y placa hour or not
	if (inputTime.After(morningStart) && inputTime.Before(morningEnd)) ||
		(inputTime.After(eveningStart) && inputTime.Before(eveningEnd)) {
		fmt.Println("Time is within the specified ranges.")
		for _, numbers := range DaysOfWeek {
			for _, number := range numbers {
			if(LastNumberSlice == number){

				allowednumbers := DaysOfWeek [day]
				for _, allowedNumber := range allowednumbers {
					if(LastNumberSlice == allowedNumber ){
						fmt.Println("Cannot move")
						move = false;
						break
					}

					if(LastNumberSlice != number){
						move = true;
						break
						}
				}}; 
			

					}}
				} else {
				fmt.Println("Time is not within the specified ranges.")
				move = true;
				}

				c.JSON(200, gin.H{"move": move})


}
