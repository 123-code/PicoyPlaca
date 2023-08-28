"use client"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import { updateTextField } from '../redux/TextField'
export default function InputTextField() {
  
  const dispatch = useDispatch();
  function handleChange(e:any) {
    const value = e.target.value;
  
    
    const valid = /^[a-zA-Z]{3}\d{3,4}$/.test(value); 
  
    if (valid) {
      dispatch(updateTextField(value))
    } else {
      console.log("invalid")
    }
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
        <TextField inputProps={{ maxLength: 7 }} onChange={handleChange} id="outlined-basic" label="full License-Number" variant="outlined" />
  
      </Box>
    );
  }