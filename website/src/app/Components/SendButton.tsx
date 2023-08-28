import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import TrafficLight from './ShowCanCirculate'


interface SendButtonProps {
  info: any; // Accept any type for the info object
}



export default function SendButton({ info }: SendButtonProps) {
  const [cancirculate, setCanCirculate] = useState<boolean | undefined>(false);

  const handleSend = () => {
    console.log("Sending:", info);
    axios.post('http://localhost:8080/info', info)
      .then(response => {
        const { move } = response.data;
        console.log("move"+ move)
        setCanCirculate(move);
      })
      .catch(error => {
        if(error.response && error.response?.data?.message ===  "Número Inválido"){
          console.log("número invalido")
          return(<div> Número inválido</div>)
        }
        console.error(error);
        console.log(error);
      });
  }

  return (
   
    <Stack direction="row" spacing={2}>
      <Button onClick={handleSend} variant="outlined" endIcon={<SendIcon />}>
        Send
      </Button>

      {cancirculate === undefined && <p>Error</p>}
      {cancirculate === true ? <div>your car can circulate!</div> : <div>your car cannot circulate :|</div>}
      <TrafficLight on={cancirculate}/>
    </Stack>
    
  );
}
