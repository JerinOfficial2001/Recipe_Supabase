import Stack from "@mui/material/Stack";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabase";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SignUpModal from "../Components/SignUpModal";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Loader from "../Components/Loader";
import Alert from "@mui/material/Alert";

const Styledstack = styled(Stack)({
  backgroundColor: "white",
  width: "65%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "10px",
  boxShadow: "0px 0px 3px grey ",
});

function Login({ setToken }) {
  const [isLoading, setLoading] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const navigate = useNavigate();
  const [inputdata, setInputdata] = useState({
    email: "",
    password: "",
  });
  const [formerror, setFormerror] = useState(false);
  const [sucessMessage, setsucessMessage] = useState(false);
  const { email, password } = inputdata;
  const handleSubmit = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setFormerror("true");
    } else {
      navigate("/home");
    }
    if (data) {
      setToken(data);
      setFormerror(false);
    }

    if (!email || !password) {
      setFormerror(true);
    } else {
      setsucessMessage(true);
      setInputdata({
        email: "",
        password: "",
      });
    }
    setLoading(false);
  };
  return (
    <>
      {isLoading && <Loader />}
      <Grid
        sx={{
          background: "linear-gradient(to right bottom, #430089, #82ffa1)",
        }}
        container
        display="flex"
        height="100vh"
      >
        <Stack
          direction={{
            xl: "row",
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          }}
          height="100%"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="50%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            flex={2}
          >
            <Box>
              <Typography color="#1877f2" variant="h3" fontWeight="bold">
                Recipebook
              </Typography>
              <Typography variant="h5">
                Recipebook helps you connect and share <br /> with the people in
                your life.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            flex={2}
          >
            <Styledstack direction="column" spacing={4}>
              <Box
                height="250px"
                gap="10px"
                borderBottom="1px solid grey"
                width="90%"
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                {sucessMessage && (
                  <Alert severity="success">Succesfully Logged in</Alert>
                )}
                {formerror && (
                  <h6 style={{ color: " red" }}>All Fields are manditory</h6>
                )}
                <TextField
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setInputdata({ ...inputdata, email: e.target.value });
                  }}
                />
                <TextField
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setInputdata({ ...inputdata, password: e.target.value });
                  }}
                />
                <Button
                  variant="contained"
                  onClick={(e) => {
                    handleSubmit(e);
                    e.preventDefault();
                  }}
                >
                  Login
                </Button>
                <Box
                  height="40px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Link href="/forget">Forgotten password?</Link>
                </Box>
              </Box>
              {openModal && (
                <SignUpModal
                  openModal={openModal}
                  setopenModal={setopenModal}
                />
              )}
              <Box
                width="100%"
                height="80px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    setopenModal((p) => !p);
                  }}
                  sx={{ backgroundColor: "#42b72a" }}
                >
                  Create New Account
                </Button>
              </Box>
            </Styledstack>
          </Box>
        </Stack>
      </Grid>
    </>
  );
}

export default Login;
