import { Button } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router";
import { signOut } from "@firebase/auth";
import { useSnackbar } from "notistack";
import { auth } from "../../firebase";

const Header = () => {
  const navigate = useNavigate();
  // // const { enqueueSnackbar} = useSnackbar();
  // // const notify = (message, variant = "success") => {
  // //   enqueueSnackbar({
  // //     variant: variant,
  // //     autoHideDuration: 5000,
  // //     message: message,
  // //     anchorOrigin: {
  // //       vertical: "top",
  // //       horizontal: "right",
  // //     },
  // //     hideIconVariant: "true",
  // //   });
  // // };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/register");
        // notify("Signed out successfully!")
        console.log("Signed out successfully!");
      })
      .catch((error) => {
        // An error happened.
        // notify(error?.message || error || "Something went wrong", "error");
      });
  };
  return (
    <div>
     
        <Button color="inherit" onClick={handleLogout}>
          {" "}
          Logout
        </Button>
    
    </div>
    
  );
};

export default Header;
