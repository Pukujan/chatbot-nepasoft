import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  return (
    <AppBar position="static" sx={{ bgcolor: theme.palette.primary.main }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box>
            <Typography variant="h6">Chatbot</Typography>
          </Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>

          <Box>
            <Button color="inherit">Start Chatting</Button>
            <Button variant="outlined" color="inherit">Sign In</Button>
            <Button variant="contained" color="secondary">Sign Up</Button>
          </Box>/..............</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;