import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import supabase from "../config/supabase";

import Grid from "@mui/material/Grid";
import Tourcard from "../Components/Tourcard";
import Form from "../Components/Form";

function Home({ token }) {
  

  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();
  const logouthandler = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  const fetchinput = async () => {
   
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
  }, [recipe?.length]);

  const deleteRecipe = (id) => {
    setRecipe((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <Nav logouthandler={logouthandler} />
     
      <Container maxWidth="xl">
        <Stack direction="column" gap="50px">
          <Form recipe={recipe} />
          <Grid container columnGap={2} rowGap={2} columns={8} direction="row">
            {recipe.map((item) => {
              return <Tourcard recipe={recipe} deleteRecipe={deleteRecipe} />;
            })}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

export default Home;
