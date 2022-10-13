import { Box,Container, Grid } from '@mui/material'
import React from 'react'
import CardComponent from './atoms/CardComponent'
import { EstateState } from "../EstateContext";
import NotFound from './atoms/NotFound';

const CardGrid = () => {
    const {filteredArray}=EstateState();
   

  return (
    <Box sx={{paddingY:"2.5rem"}}>
        <Container fixed >
            <Grid  container spacing={6} justifyContent='center'  >
                {filteredArray.length>0 ? filteredArray.map((item,index)=>{
                    return <Grid key={index} item xs={4} >
                        <CardComponent data={item} />
                    </Grid>
                }) : <NotFound/>
                }
                
                
            </Grid>
        </Container>
    </Box>
  )
}

export default CardGrid