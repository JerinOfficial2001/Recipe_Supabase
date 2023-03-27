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
import Searchbar from "./Searchbar";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import Cart from "../Screens/Cart";
import Message from "@mui/icons-material/Message";
import Profile from "../Screens/Profile";

const StyledBadge = styled(Badge)({
  color: "white",
  backgroundColor: "red",
  borderRadius: "50%",
  height: "16px",
  fontSize: "small",
  width: "16px",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  margin: "0px 0px 23px 20px ",
});

function Nav({ logouthandler }) {
  const [open, setOpen] = useState(false);
  const [openProfile, setopenProfile] = useState(false);
  const { carts } = useSelector((item) => item.user);

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
        <Typography variant="h6">Recipebook</Typography>
        <Searchbar />
        <Stack direction="row" spacing={1}>
          <IconButton>
            <Message
              sx={{
                color: "#fff",
              }}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              setOpen((p) => !p);
            }}
          >
            <ShoppingCart
              sx={{
                color: "#fff",
                position: "relative",
              }}
            />

            <StyledBadge>{carts?.length}</StyledBadge>
          </IconButton>
          {open && <Cart open={open} setOpen={setOpen} />}

          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuOpen onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  setopenProfile((p) => !p);
                  handleClose((p) => !p);
                }}
              >
                Profile
              </MenuItem>
              {openProfile && (
                <Profile
                  openProfile={openProfile}
                  setopenProfile={setopenProfile}
                />
              )}
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
