import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Sample from "./Pages/Sample";
import Signup from "./Pages/Signup";

function App() {
  const [token, setToken] = useState(false);
  if (token) {
    sessionStorage.setItem("token", JSON.stringify("token"));
  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<Signup />} />
          {token ? <Route path="/home" element={<Home token={token} />} /> : ""}
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
