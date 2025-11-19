// src/app/store.js

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

// Export actions
export const { addToCart } = cartSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
