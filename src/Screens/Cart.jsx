import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Cartcard from "../Components/Cartcard";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Cancel from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";

function Cart({ deleteCartItem, open, setOpen }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box
          sx={{
            float: "right",
            backgroundColor: "white",
            width: { ex: "40%", lg: "40%", md: "40%", sm: "100%", xs: "100%" },

            height: "90%",

            marginTop: "5%",
            borderRadius: "50px 0px 0px",
          }}
        >
          <Box
            position="absolute"
            width="70px"
            height="60px"
            textAlign="center"
          >
            <IconButton
              onClick={() => {
                setOpen(false);
              }}
              sx={{ position: "relative" }}
            >
              <Cancel />
            </IconButton>
          </Box>
          <Box direction="column" spacing={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="10px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderBottom="1px solid grey"
                height="60px"
              >
                <Typography variant="h6" color="grey">
                  PRODUCTS DETAILS
                </Typography>
              </Box>
              <Cartcard deleteCartItem={deleteCartItem} />
            </Box>

            {/* <Stack
              height="260px"
              gap="20px"
              flexDirection="column"
              alignItems="center"
              bgcolor="pink"
            >
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderBottom="1px solid grey"
                height="60px"
              >
                <Typography variant="h6" color="grey">
                  PRICE DETAILS
                </Typography>
              </Box>
              <Stack direction="column" width="90%" spacing={3}>
                <Box>
                  <Stack direction="column" spacing={3}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography>Price</Typography>
                      <Typography>₹2000</Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography>Delivery Chargers</Typography>
                      <Typography color="green">Free</Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box
                  borderBottom="1px solid grey"
                  borderTop="1px solid grey"
                  height="60px"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">Total Amount</Typography>
                  <Typography variant="h6">₹2000</Typography>
                </Box>
              </Stack>
            </Stack> */}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default Cart;
