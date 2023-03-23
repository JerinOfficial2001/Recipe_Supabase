import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

function Loader({ loading }) {
  return (
    <Modal open={loading}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    </Modal>
  );
}

export default Loader;
