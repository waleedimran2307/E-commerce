import { createSlice } from "@reduxjs/toolkit";

// slice
const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return action.payload;
    },
  },
});

// actions
export const itemsActions = itemsSlice.actions;
export default itemsSlice;
