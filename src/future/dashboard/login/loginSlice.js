import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  accessToken: localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null,
  otp: null,
  status: "idle",
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
