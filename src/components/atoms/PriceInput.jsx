import React , { useEffect } from 'react'
import { Select,Box, Typography} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


const PriceInput = ({reset,setTempObj}) => {

    const [range, setRange] = React.useState("");
    const menuItems=[
      {
        text:'<₹1000',
        up:1000,
        lp:0
      },
      {
        text:'₹1000-₹2000',
        up:2000,
        lp:1000
      },
      {
        text:'₹2000-₹4000',
        up:4000,
        lp:2000
      },
      {
        text:'₹4000-₹6000',
        up:6000,
        lp:4000
      },
      {
        text:'₹6000-₹8000',
        up:8000,
        lp:6000
      },
      {
        text:'>₹8000',
        up:Infinity,
        lp:8000,
      },
    ];

    const handleChange = (event) => {
      setRange(event.target.value);
      const set=menuItems[event.target.value];
      setTempObj((prevState)=>({
        ...prevState,
        price:set,
      }))
    };

    useEffect(() => {
      if(reset)
        setRange("");
    }, [reset])

  return (
    <Box sx={{height:"100%"}}>
      <Typography fontWeight="600" variant='body1' color="gray" marginBottom="1rem" >
        Price
      </Typography>
      <FormControl sx={{minWidth: 120 }} size="small">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={range}
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
)
}

export default PriceInput