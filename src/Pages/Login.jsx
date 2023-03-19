import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabase";

function Login({ setToken }) {
  const navigate = useNavigate();
  const [inputdata, setInputdata] = useState({
    email: "",
    password: "",
  });
  const [formerror, setFormerror] = useState(false);
  const { email, password } = inputdata;
  const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setFormerror("true");
    } else {
      navigate("/home");
    }
    if (data) {
      setToken(data);
      alert("Successfully Logged In");
      setFormerror(false);
    }

    if (!email || !password) {
      setFormerror(true);
    } else {
      setInputdata({
        email: "",
        password: "",
      });
    }
    console.log(inputdata);
  };
  return (
    <div>
      <h1>Log in</h1>
      {formerror && <h6 style={{ color: " red" }}>All Fields are manditory</h6>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setInputdata({ ...inputdata, email: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setInputdata({ ...inputdata, password: e.target.value });
        }}
      />
      <button
        onClick={(e) => {
          handleSubmit(e);
          e.preventDefault();
        }}
      >
        Login
      </button>
      <h6>Don't have an account?</h6>
      <a href="/signup">Sign Up</a>
    </div>
  );
}

export default Login;
