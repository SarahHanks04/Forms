import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Features/Slice/FormSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;