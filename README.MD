
Pico Y placa predictor:

predicts given a license plate,a date,and a time if a car can circulate in Quito,Ecuador. 

Backend written in golang
Frontend written in next.ts 

to run the Backend:


1. install the correct go version for your os from: https://go.dev/doc/install

2. git clone 

3. cd backend

4. to add dependencies run:  go mod download on the backend root 

5. to run the server, run: go run main.go.

6. to make a test request, the following format is required: 

curl -X POST -H "Content-Type: application/json" -d '{
    "number": "PQB126",
    "date": "2001-09-14",
    "time": "06:36:05"
}' http://localhost:8080/info

to run the Frontend:
1. in the cloned repo, run: cd website

2. to add dependencies,run: yarn install 

3. to run the application, run: yarn dev 

4. make sure ports 3000 & 8080 are not being used in order to run. 
