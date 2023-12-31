import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { format } from 'date-fns';
import InputTextField from './TextField'
import SendButton from './SendButton';
import TimeSelector from './TimeSelector';
import DateSelect from './DateSelector';
import TrafficLight from './ShowCanCirculate'
 
interface RootState {
  TextField: string;
  DatePicker: string;
  TimePicker:string;
}
// <TrafficLight on={false}/>
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
  const selectedDate = useSelector((state: RootState) => state.DatePicker);
  const selectedTime = useSelector((state: RootState) => state.TimePicker);
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
      <SendButton info={{ number: textField, date: selectedDate, time: selectedTime }} />

      <div><h1>placa:</h1>{textField}</div>
      <div><h1>fecha:</h1>{selectedDate}</div>
     <div><h1>Hora:</h1>{selectedTime}</div>
      </CardActions>
     
    </Card>
  );
}