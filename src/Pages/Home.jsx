import Stack from "@mui/material/Stack";

import Container from "@mui/material/Container";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import supabase from "../config/supabase";

import Content from "../Components/Content";
import Loader from "../Components/Loader";

function Home({ token }) {
  const [progress, setProgress] = useState(false);
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();
  const logouthandler = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  const fetchinput = async () => {
    setProgress(false);
    const { data, error } = await supabase
      .from("Datas")
      .select()
      .order("id", { ascending: false });
    if (error) {
      alert("something went wrong");
    }
    if (data) {
      setRecipe(data);
      console.log(data);
    }
  };
  useEffect(() => {
    fetchinput();
  }, []);

  
  return (
    <>
      <Nav logouthandler={logouthandler} />
      <Loader progress={progress} />
      <Container maxWidth="xl">
        <Stack direction="column" gap="50px">
          <Content recipe={recipe} setRecipe={setRecipe} />
        </Stack>
      </Container>
    </>
  );
}

export default Home;
