import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabase";

function Signup() {
  const navigate = useNavigate();
  const [inputdata, setInputdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formerror, setFormerror] = useState(false);
  const { name, email, password } = inputdata;
  const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
    });

    if (error) {
      setFormerror("true");
    } else {
      navigate("/");
    }
    if (data) {
      alert("We have sent Comfirm verification to your email");
      setFormerror(false);
    }

    if (!name || !email || !password) {
      setFormerror(true);
    } else {
      setInputdata({
        name: "",
        email: "",
        password: "",
      });
    }
    console.log(inputdata);
  };
  return (
    <div>
      <h1>Sign up</h1>
      {formerror && <h6 style={{ color: " red" }}>All Fields are manditory</h6>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setInputdata({ ...inputdata, name: e.target.value });
        }}
      />
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
        Signup
      </button>
      <h6>Already have an account?</h6>
      <a href="/">Log in</a>
    </div>
  );
}

export default Signup;
