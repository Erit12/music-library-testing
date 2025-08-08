import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "./slices/librarySlice.js";
import searchReducer from "./slices/searchSlice.js";

const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: searchReducer
  }
});

export default store;