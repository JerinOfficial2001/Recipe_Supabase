import LinearProgress from "@mui/material/LinearProgress";
import React from "react";

function Loader({ progress }) {
  return <LinearProgress variant="determinate" value={progress} />;
}

export default Loader;
