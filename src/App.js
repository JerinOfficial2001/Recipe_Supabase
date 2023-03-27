import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPW from "./Pages/ForgetPW";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

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
          <Route path="/forget" element={<ForgetPW />} />
          {token ? <Route path="/home" element={<Home token={token} />} /> : ""}
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
