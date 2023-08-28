"use client"
import * as React from 'react';
import {useState} from'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Sender from './Sender';
import axios from 'axios';

export default function SendButton({}) {
    const [cancirculate,setcancirculate] = useState(false);
    const handleSend = () => {
        const info = {
            number: "pba4450",
            date: "2001-09-14",
            time: "07:36:05"  
        }
        console.log("llego")
        axios.post('http://localhost:8080/info', info)
        .then(response => {
            const {move} = response.data;
            setcancirculate(move); 
            //setcancirculate(response.data);
          })
        .catch(error => {
          console.error(error);
          console.log(error)
        });
      }
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={()=>handleSend()} variant="outlined" endIcon={<SendIcon />}>
        Send 
      </Button>

      {
  cancirculate === undefined
    ? <p>Loading...</p>
    : <div>{cancirculate.toString()}</div>
}
     
    </Stack>
  );
}