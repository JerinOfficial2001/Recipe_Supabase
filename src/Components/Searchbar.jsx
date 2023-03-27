import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import Search from "@mui/icons-material/Search";


function Searchbar() {
  // const [user, setuser] = useState([]);
  const [name, setname] = useState("");
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        value={name}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ "aria-label": "search " }}
        onChange={(e) => setname(e.target.value)}
      />
      {/* {user.map((e) => (
        <Box>{e.name}</Box>
      ))} */}

      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default Searchbar;
