import React, { useEffect, useRef } from 'react'
import { Box, TextField, Typography } from '@mui/material'

const LocationInput = ({reset,setTempObj}) => {

const textInput = useRef(null)

  useEffect(() => {
    if(reset)
      textInput.current.value = "";
  }, [reset])
  

  const handleChange=(e)=>{
    setTempObj(prevState=>({
      ...prevState,
      city:e.target.value,
    }))
  }
  

  return (
    <Box component="form" noValidate autoComplete="off" sx={{height:"100%"}}>
        <Typography fontWeight="600" variant='body1' color="gray" marginBottom="1rem" >
        Location
      </Typography>
            <TextField inputRef={textInput}  id="outlined-basic" label="City" variant="outlined" onChange={handleChange}  />
    </Box>
  )
}

export default LocationInput