import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import { useSelector } from "react-redux";
import supabase from "../config/supabase";


function Cartcard({ deleteCartItem }) {
  const { carts } = useSelector((item) => item.user);


  const deleteCartHandler = async (id) => {
    const { error } = await supabase.from("cartdata").delete().eq("id", id);
    if (error) {
      alert("cartItem not deleted");
    } else {
      deleteCartItem(id);
    }
  };

  return (
    <Stack width="100%" direction="column" spacing={1}>
      {carts?.map((item) => {
        const { id, category, quantity, dishname } = item;
        return (
          <Stack
            alignItems="center"
            justifyContent="space-between"
            bgcolor="white"
            direction="row"
            height="70px"
          >
            <Stack
              direction="row"
              height="100%"
              alignItems="center"
              spacing={1}
            >
              <Box
                key={id}
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="70px"
                bgcolor="yellow"
              >
                Image
              </Box>

              <Box>
                <Typography>{dishname}</Typography>
                <Typography variant="h8">{category}</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Quantity:{quantity}</Typography>
              <Button
                onClick={() => {
                  deleteCartHandler(id);
                 
                }}
              >
                Remove{" "}
              </Button>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Cartcard;
