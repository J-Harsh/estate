import { Box, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'

const NotFound = () => {
  return (
      <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}} >
          <Typography sx={{textAlign:"center",marginTop:"8rem"}} color={deepPurple.A200} fontWeight="400"  variant="h6" >
          We are constantly updating our list of properties,please check later 😊
            </Typography>
        </Box>
  )
}

export default NotFound