package util

import(
	"fmt"
	"github.com/gin-gonic/gin"

)

func Slice(c *gin.Context,params CarInfo) string {
	licenseplate := params.Number;
	var lastchar rune

	for _,x := range licenseplate{
		fmt.Printf("%c\n", x)
	if(len(licenseplate)>=6 && len(licenseplate)<7){
		lastchar = rune(licenseplate[len(licenseplate)-1])
		fmt.Println(lastchar)
	}else{
		c.JSON(500,"Número Inválido");
		return ""
	}
	}
	return string(lastchar);

}