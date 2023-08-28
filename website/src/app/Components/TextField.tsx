"use client"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux'
import { updateTextField } from '../redux/TextField'
export default function InputTextField() {

  const dispatch = useDispatch();
  function handleChange(e:any) {
    dispatch(updateTextField(e.target.value)) 
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
        <TextField onChange={handleChange} id="outlined-basic" label="full License-Number" variant="outlined" />
  
      </Box>
    );
  }