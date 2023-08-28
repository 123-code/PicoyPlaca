import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Sender from './Sender';
import axios from 'axios';

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
        setCanCirculate(move);
      })
      .catch(error => {
        console.error(error);
        console.log(error);
      });
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={handleSend} variant="outlined" endIcon={<SendIcon />}>
        Send
      </Button>

      {cancirculate === undefined ? <p>Loading...</p> : <div>{cancirculate.toString()}</div>}
    </Stack>
  );
}
