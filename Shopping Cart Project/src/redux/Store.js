import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";

// Creating the Redux store with 'configureStore' function and passing in the 'cartReducer' as the reducer for the 'cart' slice of the store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});