import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";
import fetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./bagSlice";

// Myntra store
const myntraStore = configureStore({
  reducer: {
    item: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bagslice: bagSlice.reducer,
  },
});

export default myntraStore;
