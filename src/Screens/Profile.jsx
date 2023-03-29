import Cancel from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useUser } from "@supabase/auth-helpers-react";
import Button from "@mui/material/Button";
import userimage from "../assets/user.jpg";

function Profile({ openProfile, setopenProfile }) {
  const userEmail = useUser();
  const [addphotobutton, setaddphotobutton] = useState(false);
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
            <Stack
              alignItems="center"
              justifyContent="space-between"
              direction="row"
            >
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
              <div
                onClick={() => {
                  setaddphotobutton((p) => !p);
                }}
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  backgroundImage: `url(${userimage})`,
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {addphotobutton && (
                  <Button
                    sx={{
                      color: "grey",
                      borderRadius: "20px",
                      border: "2px solid white",
                      backgroundColor: "rgba(0, 0, 0, 0.337)",
                    }}
                  >
                    Add Photo
                  </Button>
                )}
              </div>

              {/* <Avatar sx={{ height: 200, width: 200 }} /> */}
              <Typography variant="h4">Profile Name</Typography>
              <Typography>{userEmail.email}</Typography>
              <Typography>D.O.B</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Fade>
    </Modal>
  );
}

export default Profile;
