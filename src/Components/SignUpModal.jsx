import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import supabase from "../config/supabase";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Close from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

const Styledmodel = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Styledbox = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: 10,
  width: 450,
});

function SignUpModal({ setopenModal, openModal }) {
  const [inputdata, setInputdata] = useState({
    name: "",
    date: "",
    email: "",
    password: "",
    gender: "",
  });
  const [formerror, setFormerror] = useState(false);
  const { name, date, email, password, gender } = inputdata;
  const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
    });

    if (error) {
      setFormerror("true");
    } else {
      setopenModal(false);
    }
    if (data) {
      setFormerror(false);
    }

    if (!date || !gender || !name || !email || !password) {
      setFormerror(true);
    } else {
      alert("We have sent Comfirm verification to your email");
      setInputdata({
        name: "",
        email: "",
        date: "",
        password: "",
        gender: "",
      });
    }
    console.log(inputdata);
  };
  return (
    <Styledmodel
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      closeAfterTransition
    >
      <Fade in={openModal}>
        <Styledbox>
          <Stack spacing={3} direction="column" alignItems="center">
            <Box
              margin="0px 15px"
              borderBottom="1px solid #babdc1"
              flexDirection="column"
              height="90px"
              width="100%"
              display="flex"
              justifyContent="center"
            >
              <Stack direction="row" justifyContent="space-between">
                <Typography marginLeft="10px" fontWeight="bold" variant="h4">
                  Sign Up
                </Typography>
                <IconButton
                  onClick={() => {
                    setopenModal(false);
                  }}
                >
                  <Close />
                </IconButton>
              </Stack>

              <Typography marginLeft="10px" color="grey">
                It's quick and easy.
              </Typography>
            </Box>
            {formerror && (
              <h6 style={{ color: " red" }}>All Fields are manditory</h6>
            )}
            <Stack alignItems="center" spacing={2} sx={{ width: "80%" }}>
              <TextField
                fullWidth="100%"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setInputdata({ ...inputdata, name: e.target.value });
                }}
              />
              <TextField
                fullWidth="100%"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setInputdata({ ...inputdata, email: e.target.value });
                }}
              />
              <TextField
                fullWidth="100%"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setInputdata({ ...inputdata, password: e.target.value });
                }}
              />
              <TextField
                fullWidth="100%"
                type="date"
                value={date}
                onChange={(e) => {
                  setInputdata({ ...inputdata, date: e.target.value });
                }}
              />

              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Gender</Typography>
                <FormControlLabel control={<Checkbox />} label="Male" />
                <FormControlLabel control={<Checkbox />} label="Female" />
              </FormGroup>
              <Box
                display="flex"
                justifyContent="center"
                height="50px"
                width="100%"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#42b72a" }}
                  onClick={(e) => {
                    handleSubmit(e);
                    e.preventDefault();
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Styledbox>
      </Fade>
    </Styledmodel>
  );
}

export default SignUpModal;
