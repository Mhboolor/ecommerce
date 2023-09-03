import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../future/dashboard/login/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
