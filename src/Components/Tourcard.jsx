import Favorite from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Share from "@mui/icons-material/Share";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import MoreVert from "@mui/icons-material/MoreVert";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import supabase from "../config/supabase";
import J25EditModal from "./J25EditModal";
import Button from "@mui/material/Button";

function Tourcard({ addToCartHandler, item, deleteRecipe, setOpen }) {
  const [openModel, setOpenModel] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const { id, user, date, dishname, category, price } = item;

  const deletehandler = async (id) => {
    const { error } = await supabase.from("Datas").delete().eq("id", id);
    if (error) {
      alert("not deleted");
    } else {
      handleClose();
      deleteRecipe(id);
    }
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <Card
      sx={{
        width: { xl: 210, lg: 210, md: 210, sm: 330, xs: 330 },
        height: { xl: 320, lg: 320, md: 320, sm: 410, xs: 410 },
      }}
    >
      <CardHeader
        avatar={<Avatar>J</Avatar>}
        action={
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MoreVert onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem
                onClick={() => {
                  setOpenModel((p) => !p);
                }}
              >
                Edit
              </MenuItem>
              {openModel && (
                <J25EditModal
                  openModel={openModel}
                  setOpenModel={setOpenModel}
                  setAnchorEl={setAnchorEl}
                  item={item}
                />
              )}
              <MenuItem
                onClick={() => {
                  deletehandler(id);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
          </IconButton>
        }
        title={<Typography fontSize="11px">{user}</Typography>}
        subheader={<Typography fontSize="10px">{date}</Typography>}
      />
      <CardMedia
        sx={{
          height: { xl: 120, lg: 120, md: 120, sm: 200, xs: 200 },
        }}
        image={require("../assets/dish.jpeg")}
        title={<Typography fontSize="15px"> {dishname}</Typography>}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stack>
          <Typography fontSize="15px">{dishname}</Typography>
          <Typography fontSize="13px" color="gray">
            {category}
          </Typography>
        </Stack>

        <Typography variant="h6">₹{price}</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
        <Button
          onClick={() => {
            setOpen(true);
            addToCartHandler();
          }}
        >
          Add Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default Tourcard;
