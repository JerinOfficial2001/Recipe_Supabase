import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/User";

function Cartcard() {
  const dispatch = useDispatch();
  const { carts } = useSelector((item) => item.user);

  return (
    <Stack width="100%" direction="column" spacing={1}>
      {carts?.map((item) => {
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
                key={item.id}
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
                <Typography>{item.dishname}</Typography>
                <Typography variant="h8">{item.category}</Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>Quantity:{item.quantity}</Typography>
              <Button
                onClick={() => {
                  dispatch(remove(item));
                }}
              >
                Remove
              </Button>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Cartcard;
