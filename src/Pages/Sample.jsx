
import Button from "@mui/material/Button";
import React, { useState } from "react";

function Sample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && alert("Content Displayed")}
      <Button
        onClick={() => {
          setOpen((t) => !t);
        }}
      >
        Click me!
      </Button>

      <Button></Button>
    </>
  );
}

export default Sample;
