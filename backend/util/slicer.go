package util

import (
	
	"github.com/gin-gonic/gin"

)
// gets the last number, needed for verification from reqbody 
func Slice(c *gin.Context,params CarInfo) string {
	licenseplate := params.Number;
	var lastchar rune

	
		//fmt.Printf("%c\n", x)
	if(len(licenseplate)>=6 && len(licenseplate)<=7){
		lastchar = rune(licenseplate[len(licenseplate)-1])
		
	}else{
		c.JSON(500,"Número Inválido");
		return ""
	}
	
	return string(lastchar);

}