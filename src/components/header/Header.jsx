import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 0}} >
    <AppBar position="static">
      <Toolbar>
      <nav style={{ display: "flex",  gap: "2rem" }}>
        {  <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "mainClass activeClass";
            }
            return "mainClass";
          }}
          to="/home"
        >
          <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        </NavLink> && <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "mainClass activeClass";
            }
            return "mainClass";
          }}
          to="/register"
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Register
        </Typography>
         
        </NavLink> 
         }
      
         <NavLink
          className={({ isActive }) => {
            if (isActive) {
              return "mainClass activeClass";
            }
            return "mainClass";
          }}
          to="/login"
        >
          <Button color="inherit">Login</Button>
        </NavLink>
       
        </nav>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header