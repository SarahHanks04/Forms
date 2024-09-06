// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Features/Slice/FormSlice"; // Rename to formReducer

export const store = configureStore({
  reducer: {
    form: formReducer, // Rename card to form
  },
});

export default store;