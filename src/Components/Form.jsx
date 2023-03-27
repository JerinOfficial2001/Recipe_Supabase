import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Add from "@mui/icons-material/Add";
import J25modal from "./J25modal";

function Form({ recipe }) {
  const [openModel, setOpenModel] = useState(false);
  return (
    <Box >
      <Button
        sx={{
          border: "1px solid black",
          height: 40,
          marginTop: 2,
          float: "right",
          position:'sticky'
        }}
        endIcon={<Add />}
        onClick={() => {
          setOpenModel((p) => !p);
        }}
      >
        Add Recipe
      </Button>

      <J25modal
        openModel={openModel}
        setOpenModel={setOpenModel}
        recipe={recipe}
      />
    </Box>
  );
}

export default Form;
