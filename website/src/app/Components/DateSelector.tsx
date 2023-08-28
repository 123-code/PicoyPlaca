"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import dayjs, { Dayjs } from 'dayjs';
import { updateDatePicker } from '../redux/DatePicker'


export default function DateSelect() {

  const dispatch = useDispatch();

  function handleChange(e:any) {
   
    dispatch(updateDatePicker(e.target.value));
  }

  return (
  
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField onChange={handleChange} id="outlined-basic" label="date" variant="outlined" />
  
      </Box>
  
  );
}
