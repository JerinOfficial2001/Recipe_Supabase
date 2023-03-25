import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ForgetPW() {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Stack
        direction="column"
        sx={{
          backgroundColor: "#fff",
          width: "45%",
          alignItems: "center",
          justifyContent: "center",
          height: "50%",
          borderRadius: "10px",
          boxShadow: "0px 1px 3px ",
        }}
      >
        <Box
          borderBottom="1px solid grey"
          width="100%"
          display="flex"
          alignItems="center"
          height="20%"
        >
          <Typography marginLeft="20px" variant="h5" fontWeight="bold">
            Find Your Account
          </Typography>
        </Box>
        <Box
          borderBottom="1px solid grey"
          width="100%"
          display="flex"
          height="50%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="10px"
        >
          <Typography sx={{ width: "90%" }}>
            Please enter your email address to search <br /> for your account
          </Typography>
          <TextField sx={{ width: "90%" }} placeholder="Email address" />
        </Box>

        <Box width="100%" height="25%">
          <Box margin="5%">
            <Button
              sx={{ backgroundColor: "#e4e6eb", color: "grey", float: "right" }}
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{ float: "right", marginRight: "10px" }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}

export default ForgetPW;
