package main 

import

(
	"backend/util"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"fmt"
	"os"
)

func main() {
	router := gin.Default()

	router.Use(cors.Default())

	router.GET("/hello", func(c *gin.Context) {
		c.String(200, "hello")
	})
    
	router.POST("/info", func(c *gin.Context) {

		util.GetInfo(c)
	
		
	  
	  })


	port := os.Getenv("PORT")
	if(port == ""){
	port = "8080"
	}
	router.Run("0.0.0.0:"+port);
	fmt.Println("server live on port:" + port)
}