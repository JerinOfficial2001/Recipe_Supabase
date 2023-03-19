import Grid from "@mui/material/Grid";

import React from "react";
import Form from "./Form";
import Tourcard from "./Tourcard";

function Content({ recipe, setRecipe }) {
  const deleteRecipe = (id) => {
    setRecipe((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <Form recipe={recipe} />
      <Grid
        container
        flex={4}
        display="flex"
        alignItems="center"
        height="500px"
      >
        <Grid
          item
          gap="10px"
          display="flex"
          alignItems="center"
          lg={6}
          md={3}
          sm={10}
          xs={12}
          key={recipe.id}
        >
          {recipe.map((item) => {
            return <Tourcard recipe={item} deleteRecipe={deleteRecipe} />;
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default Content;
