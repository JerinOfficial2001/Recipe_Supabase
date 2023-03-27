import Cancel from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function Profile({ openProfile, setopenProfile }) {
  return (
    <Modal open={openProfile}>
      <Fade in={openProfile}>
        <Grid
          direction="column"
          sx={{
            background: "linear-gradient(to right bottom, #430089, #82ffa1)",
          }}
          height="100vh"
          width="100%"
        >
          <Container>
            <Stack alignItems='center' justifyContent="space-between" direction="row">
              <Typography color="white" variant="h5" fontWeight="bold">
                Recipebook
              </Typography>
              <IconButton
                onClick={() => {
                  setopenProfile(false);
                }}
              >
                <Cancel />
              </IconButton>
            </Stack>
          </Container>
          <Stack alignItems="center" justifyContent="center">
            <Stack
              sx={{
                width: 350,
                height: 500,
                borderRadius: 10,
                boxShadow: "0px 0px 5px black",
              }}
              alignItems="center"
              justifyContent="space-around"
              direction="column"
              bgcolor="white"
            >
              <Avatar sx={{ height: 200, width: 200 }} />
              <Typography variant="h4">Profile Name</Typography>
              <Typography>Email</Typography>
              <Typography>D.O.B</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Fade>
    </Modal>
  );
}

export default Profile;
