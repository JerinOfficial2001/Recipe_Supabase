import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import React from "react";
import Nav from "../Components/Nav";
import Cartcard from "../Components/Cartcard";


function Cart() {
 
  return (
    <>
      <Nav />
      <Container maxWidth="xl" sx={{ marginTop: "10px" }}>
        <Stack direction="row" spacing={3}>
          <Box
            flex={2.5}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="10px"
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
                PRODUCTS DETAILS
              </Typography>
            </Box>
            <Cartcard />
          </Box>
          <Box
            height="260px"
            gap="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            bgcolor="pink"
            flex={1.5}
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
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default Cart;
