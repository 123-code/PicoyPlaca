import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import  { TimePicker }  from '@mui/x-date-pickers/TimePicker';
import { useDispatch } from 'react-redux'
import dayjs, { Dayjs } from 'dayjs';
import { updateTimePicker } from '../redux/TimePicker'

import TextField from '@mui/material/TextField';

export default function TimeSelector() {
  const dispatch = useDispatch();

  function handleChange(e:any) {
   
    dispatch(updateTimePicker(e.target.value));
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
      <TextField onChange={handleChange} id="outlined-basic" label="time separated by : " variant="outlined" />
      </DemoContainer>
    </LocalizationProvider>
  );
}