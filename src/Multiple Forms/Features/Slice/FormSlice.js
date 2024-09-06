import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  address: "",
  password: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const { updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
