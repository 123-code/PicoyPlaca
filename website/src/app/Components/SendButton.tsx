import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import TrafficLight from './ShowCanCirculate'


interface SendButtonProps {
  info: any; 
}



export default function SendButton({ info }: SendButtonProps) {
  const [cancirculate, setCanCirculate] = useState<boolean | undefined>(false);
  const [restriction, setRestriction] = useState<boolean>();

  const handleSend = () => {
    console.log("Sending:", info);
    axios.post('http://localhost:8080/info', info)
      .then(response => {
        const { move, restriction } = response.data;
        console.log("move"+ move)
        console.log("restriction"+ restriction)
        setCanCirculate(move);
        setRestriction(restriction);
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

      {cancirculate===undefined && <div>your car can circulate! <TrafficLight on={true}/></div>}
      {cancirculate === true  &&  <div>your car can circulate! <TrafficLight on={true}/></div>}
      {cancirculate === false && <div> you cannot circulate at this time :|
      <TrafficLight on={false}/>
      </div>}
      
   
     
    </Stack>
    
  );
}
