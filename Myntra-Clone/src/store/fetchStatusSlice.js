import { createSlice } from "@reduxjs/toolkit";

// slice
const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
    fetchFailed: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    fetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    fetchingEnded: (state) => {
      state.currentlyFetching = false;
    },
    fetchFailedStarted: (state) => {
      state.fetchFailed = true;
    },
    fetchFailedEnded: (state) => {
      state.fetchFailed = false;
    },
  },
});

// actions
export const fetchActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
