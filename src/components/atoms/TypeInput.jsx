import React, { useEffect } from 'react'
import { Select,Box, Typography } from '@mui/material';
import {MenuItem} from '@mui/material';

import FormControl from '@mui/material/FormControl';

const TypeInput = ({reset,setTempObj}) => {
  
    const [range, setRange] = React.useState("");
    const menuItems=[
      {
        text:'House',
      },
      {
        text:'Office',
      },
      {
        text:'Industry',
      }
    ];
    const handleChange = (event) => {
      setRange(event.target.value);
      const set=menuItems[event.target.value].text;
      setTempObj((prevState)=>({
        ...prevState,
        type:set,
      }))
    };

    useEffect(() => {
      if(reset)
        setRange("");
    }, [reset])
    
    

  return (
    <Box sx={{height:"100%"}}>
    <Typography fontWeight="600" variant='body1' color="gray" marginBottom="1rem" >
        Property Type
      </Typography>
    <FormControl sx={{minWidth: 120 }} size="small">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={range}
        label=""
        onChange={handleChange}
      >
        {menuItems.map((item,index)=>{
          return(
            <MenuItem key={index} value={index}>{item.text}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  </Box>
)}


export default TypeInput