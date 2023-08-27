"use client"
import axios from 'axios';
interface SenderProps {
    number: string;
    date: string; 
    time: string;
  }
  // makes s post request to the server using axios. 
export default function Sender({number,date,time}:SenderProps ){
    const info = {
        number: number,
        date: date, 
        time: time
      };
 
  axios.post('http://localhost:8080/info', info)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
    console.log(error)
  });
}