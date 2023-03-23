import { createSlice } from "@reduxjs/toolkit";

const initialState = { carts: [], quantity: 0 };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addcard: (state, action) => {
      const find = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.carts[find].quantity += 1;
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        state.carts.push(tempvar);
      }
    },
    remove: (state, action) => {
      let existingItems = [...state.carts];
      const find = existingItems.findIndex(
        (item) => item.id === action.payload.id
      );
      existingItems.splice(find, 1);
      state.carts = existingItems;
    },
  },
});
export const { addcard, remove } = userSlice.actions;
export default userSlice.reducer;
