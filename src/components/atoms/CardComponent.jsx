import React from 'react'
import Card from '@mui/material/Card';
import img from '../../util/house.jpg'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { deepPurple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import {AiOutlineHeart} from 'react-icons/ai'
import {IoBedOutline} from 'react-icons/io5'
import {BiBath} from 'react-icons/bi' 
import {HiOutlineArrowsExpand} from 'react-icons/hi'


const CardComponent = ({data}) => {
  return (
    <Card  sx={{width:"100%",position:"relative", borderRadius:"0.75rem", boxShadow:"none",background:deepPurple[50]}}>
      <CardMedia
      sx={{height:"22.5vh"}}
        component="img"
        src={img}
        alt="green iguana"
        />
        <Ribbon />
    <CardContent>
      <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}} >
          <Typography color={deepPurple.A200} fontWeight="400"  variant="h5" >
          ₹{data.price.toLocaleString()}<span style={{fontSize:14,color:'grey'}}>/month</span>
          </Typography>
          <Typography color={deepPurple.A200} fontWeight="600"  variant="h6" >
            <button>
              <AiOutlineHeart/>
            </button>
            </Typography>
        </Box>
        <Typography fontWeight='600' variant='h6' >
        {data.name}
        </Typography>
        <Box sx={{paddingY:'0.6rem'}}>
        <Typography variant="body2" color="text.secondary" >
        {data.address}<Typography color={deepPurple.A200} fontWeight="400">{data.location}</Typography>
        </Typography>
        </Box>
        <Divider flexItem />
        <Stack sx={{alignItems:'center',paddingTop:'1rem'}} direction={'row'} spacing={3}>
        
        <Typography display="flex" alignItems="center" variant="subtitle2">
          <Typography color={deepPurple.A200} variant='body1'><IoBedOutline />
          </Typography>&nbsp;
          {data.beds} Beds
        </Typography>
        
        <Typography display="flex" alignItems="center"  variant="subtitle2">
          <Typography color={deepPurple.A200} variant='body1'>
            <BiBath />
          </Typography>
          &nbsp;
          {data.bathrooms} Bathrooms
        </Typography>
        
        <Typography display="flex" alignItems="center"  variant="subtitle2">
        <Typography color={deepPurple.A200} variant='body1'><HiOutlineArrowsExpand />
          </Typography>&nbsp;
          {data.area} m<sup>2</sup> </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

const Ribbon = () => {
  return(
      <div className='absolute bottom-[51%]  bg-violet-400  w-auto pr-4 rounded-r-lg shadow-md  ' >
        ✨Popular
      </div>
  )
}

export default CardComponent