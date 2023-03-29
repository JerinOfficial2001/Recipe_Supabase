import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./Redux/User";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import supabase from "./config/supabase";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <Provider store={store}>
        <App />
      </Provider>
    </SessionContextProvider>
  </React.StrictMode>
);
