import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';

 function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
        <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              
              color="inherit"
            >
              <RestaurantSharpIcon />
            </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Foodistan
          </Typography>
          <Button color='inherit'>About Us</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;