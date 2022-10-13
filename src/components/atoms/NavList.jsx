import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { purple   } from '@mui/material/colors';
import {BiCaretDown} from 'react-icons/bi';
import { Typography } from '@mui/material';


function NavList({text}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
<>
    <Button
    id="basic-button"
    onClick={handleClick}
    sx={{textTransform:'none',fontSize:17,color:"black",marginRight:"1.75rem",':hover':{ color:purple[500],}}}
  >
    <Typography fontWeight="600" >  
    {text}
    </Typography> 
    <BiCaretDown/>
  </Button> 
  <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    <MenuItem onClick={handleClose}>option 1</MenuItem>
    <MenuItem onClick={handleClose}>option 2</MenuItem>
    <MenuItem onClick={handleClose}>option 3</MenuItem>
  </Menu>
  </>
  )
}

export default NavList