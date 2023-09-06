import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useNavigate } from "react-router";
import { auth } from "../../firebase";
import { signOut } from "@firebase/auth";
import Sidebar from "../list copy/Sidebar";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/register");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
    <Sidebar/>
     {/* <Button color="inherit" onClick={handleLogout}>
              {" "}
              Logout
            </Button> */}
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>

            <Button color="inherit" onClick={handleLogout}>
              {" "}
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box> */}
     
    </>
  );
};

export default Home;
