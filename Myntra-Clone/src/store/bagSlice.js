import { createSlice } from "@reduxjs/toolkit";

// slice
const bagSlice = createSlice({
  name: "bagslice",
  initialState: [],
  reducers: {
    addfromBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      const newState = state.filter((itemId) => itemId !== action.payload);
      return newState;
    },
  },
});

// bagslice actions
export const bagActions = bagSlice.actions;
export default bagSlice;
