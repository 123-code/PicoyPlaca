import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputTextField from './TextField'
import IconLabelButtons from './SendButton';
import TimeSelector from './TimeSelector';
import DateSelect from './DateSelector';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
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
      <IconLabelButtons/> 
      </CardActions>
    </Card>
  );
}