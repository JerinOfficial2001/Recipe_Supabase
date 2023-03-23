import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import supabase from "../config/supabase";

import Grid from "@mui/material/Grid";
import Tourcard from "../Components/Tourcard";
import Form from "../Components/Form";
import Notify from "../Components/Notify";
import Loader from "../Components/Loader";

function Home({ token }) {
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();
  const logouthandler = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  const fetchinput = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("Datas")
      .select()
      .order("id", { ascending: false });
    if (error) {
      setLoading(false);
    }
    if (data) {
      setRecipe(data);
      setLoading(false);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchinput();
  }, []);

  const deleteRecipe = (id) => {
    setRecipe((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <Loader loading={isLoading} />
      <Nav logouthandler={logouthandler} />

      <Container maxWidth="xl">
        <Stack direction="column" gap="50px">
          <Form recipe={recipe} />
          <Grid container columnGap={2} rowGap={2} columns={8} direction="row">
            {recipe.map((item, index) => {
              return (
                <Tourcard
                  setOpen={setOpen}
                  key={index}
                  item={item}
                  deleteRecipe={deleteRecipe}
                />
              );
            })}
          </Grid>
        </Stack>
        {open && <Notify setOpen={setOpen} open={open} />}
      </Container>
    </>
  );
}

export default Home;
