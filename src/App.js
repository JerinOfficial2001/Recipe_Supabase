import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

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
          {token ? <Route path="/cart" element={<Cart />} /> : ""}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
