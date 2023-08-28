import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import InputTextField from './TextField'
import SendButton from './SendButton';
import TimeSelector from './TimeSelector';
import DateSelect from './DateSelector';


interface RootState {
  TextField: string;
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function BasicCard() {
  const textField = useSelector((state: RootState) => state.TextField);
  return ( 
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography variant="h2">Pico y placa Detector</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          fill in the form, check wether you can circulate.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          License Plate:
        </Typography>
        <InputTextField/>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Date:
        </Typography>
        <DateSelect/>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Time:
        </Typography>
        <TimeSelector/>
      </CardContent>
      <CardActions>
      <SendButton/> 
      <div>{textField}</div>
      </CardActions>
    </Card>
  );
}