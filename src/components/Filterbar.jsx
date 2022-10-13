import { Box, Divider } from '@mui/material'
import React, { useState } from 'react'
import LocationInput from './atoms/LocationInput'
import DateInput from './atoms/DateInput'
import PriceInput from './atoms/PriceInput'
import TypeInput from './atoms/TypeInput'
import Button from './atoms/Button'
import { EstateState } from '../EstateContext'

const Filterbar = () => {
  const {filters,setFilters}=EstateState();
  const [tempObj, setTempObj] = useState({...filters})
  const [reset, setReset] = useState(true)

  const handleClick=()=>{
    setFilters((prevState)=>({
      ...prevState,
      ...tempObj,
    }))
    setReset(false)
  }

  const deleteAllFilters=()=>{
    setFilters((prevState)=>({
      ...prevState,
      city:"",
      date:null,
      price:null,
      type:null
    }));

    setTempObj((prevState)=>({
      ...prevState,
      city:"",
      date:null,
      price:null,
      type:null
    }));
    
    setReset(true);
  }



  return (
    <Box sx={{ display: 'flex' ,bgcolor:"white",gap:"1.25rem",alignItems:"center", justifyContent:"center", borderRadius:"1.5rem",padding:"1rem 0rem",margin:"0.5rem 11rem" }}  >
        <LocationInput  reset={reset} setTempObj={setTempObj} />
        <Divider orientation="vertical" flexItem/>
        <DateInput   reset={reset} setTempObj={setTempObj} />
        <Divider orientation="vertical" flexItem/>
        <PriceInput   reset={reset} setTempObj={setTempObj}/>
        <Divider orientation="vertical" flexItem/>
        <TypeInput reset={reset}  setTempObj={setTempObj} />
        <Divider orientation="vertical" flexItem/>
        <Box sx={{display:"flex"}} >
            <Button  handleClick={handleClick} customClass={"bg-violet-600 text-white hover:bg-violet-700 transition-all px-8 py-4 "} text={"Search"} />
            <Button handleClick={deleteAllFilters}  customClass={"bg-red-600 text-white hover:bg-red-700 transition-all "} text={"Reset"} />
        </Box>
    </Box>
  )
}

export default Filterbar