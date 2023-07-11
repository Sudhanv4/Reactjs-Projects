import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state of the 'cart' slice as an empty array
const initialState = [];

// Creating a 'cartSlice' with the 'createSlice' function and defining its name, initial state, and reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // A reducer that adds an item to the cart by pushing the item's data into the state array
    add(state, action) {
      state.push(action.payload);
    },
    // A reducer that removes an item from the cart by returning a new array with all items except the one with the matching ID
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// Exporting the 'add' and 'remove' actions from the 'cartSlice'
export const { add, remove } = cartSlice.actions;

// Exporting the 'cartSlice' reducer as the default export of this module
export default cartSlice.reducer;

// This code creates a Redux slice for the 'cart' state, which includes two actions: 'add' and 'remove'. The 'add' action pushes a new item into the cart state array, while the 'remove' action removes an item from the cart by returning a new array with all items except the one with the matching ID.