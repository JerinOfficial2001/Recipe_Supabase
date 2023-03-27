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

import Cart from "../Screens/Cart";
import { useDispatch } from "react-redux";
import { addcard, getCartItems } from "../Redux/User";

function Home({ token }) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
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
      setLoading(false);
    }
    if (data) {
      setRecipe(data);
      setLoading(false);
    }
  };
  // useEffect(()=>{setTimeout()},[])
  useEffect(() => {
    fetchinput();
  }, [recipe]);

  //delete
  const deleteRecipe = (id) => {
    setRecipe((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  //cartdata

  const fetchCartData = async () => {
    const { data, error } = await supabase
      .from("cartdata")
      .select()
      .order("id", { ascending: false });
    if (error) {
      setLoading(false);
    }

    if (data) {
      dispatch(getCartItems(data));
      setLoading(false);
      setcartItems(data);
    }
  };

  fetchCartData();

const deleteCartItem = (id) => {
  setcartItems((prevcartitem) => {
    return prevcartitem.filter((item) => item.id !== id);
  });
};

  return (
    <>
      {isLoading && <Loader loading={isLoading} />}
      <Nav logouthandler={logouthandler} />

      <Container maxWidth="xl">
        <Stack direction="column" gap="50px">
          <Form recipe={recipe} />
          <Grid container columnGap={2} rowGap={2} columns={8} direction="row">
            {recipe.map((item, index) => {
              const { id, dishname, category, quantity } = item;
              const addToCartHandler = async () => {
                const { data, error } = await supabase
                  .from("cartdata")
                  .insert({ id, dishname, category, quantity });
                if (data) {
                  dispatch(addcard(item));
                }
                if (error) {
                  alert("error at addtocarthandler");
                }
              };

              return (
                <>
                  <Cart deleteCartItem={deleteCartItem} />
                  <Tourcard
                    addToCartHandler={addToCartHandler}
                    setOpen={setOpen}
                    key={index}
                    item={item}
                    deleteRecipe={deleteRecipe}
                  />
                </>
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
