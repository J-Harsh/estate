import React, { useEffect } from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Box, TextField, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const DateInput = ({reset,setTempObj}) => {
  const [value, setValue] = React.useState(null);

  const handleClick=(val)=>{
    let tempDate;
    if(val)
       tempDate=new Date(val);
    else 
      tempDate=null;

    setTempObj((prevState)=>({
      ...prevState,
      date:tempDate,
    }))
  }

  useEffect(() => {
    if(reset)
    setValue(null);
  }, [reset])

  return (
    <Box sx={{height:"100%"}}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography fontWeight="600" variant='body1' color="gray" marginBottom="1rem" >
        When
      </Typography>
      <DatePicker
        label="Set Move In Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          handleClick(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </Box >
  )
}

export default DateInput