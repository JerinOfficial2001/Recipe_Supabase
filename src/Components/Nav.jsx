import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuOpen from "@mui/icons-material/MenuOpen";

import Stack from "@mui/material/Stack";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

function Nav({ logouthandler }) {
 const [anchorEl, setAnchorEl] = useState(null);
  const logout = () => {
    logouthandler();
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Recipe</Typography>
        <Stack direction="row" spacing={1}>
          <IconButton>
            <ShoppingCart
              sx={{
                color: "#fff",
              }}
            />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuOpen onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
