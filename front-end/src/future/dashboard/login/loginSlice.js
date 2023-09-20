import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { checkOtp, getMe, getOtp } from "../../../services/api";
import { toast } from "react-toastify";

export const authUser = createAsyncThunk("login/authUser", async (mobile) => {
  const response = await getOtp(mobile);
  return response;
});

export const checkCode = createAsyncThunk("login/checkCode", async (data) => {
  const response = await checkOtp(data);
  return response;
});

export const getUser = createAsyncThunk("login/getMe", async () => {
  const response = await getMe();
  return response;
});

const initialState = {
  accessToken: localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null,
  otp: null,
  userInfo: localStorage.getItem("userInfo")
    ? localStorage.getItem("userInfo")
    : null,
  role: null,
  isLogin: false,
  status: "idle",
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.accessToken = null;
      state.userInfo = null;
      state.otp = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.status = "success";
        state.otp = action.payload.data.code;
        toast.success(`کد ارسالی شما : ${state.otp}`);
      })
      .addCase(authUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
        toast.warning("کد شما هنوز منقضی نشده است !");
      })
      .addCase(checkCode.fulfilled, (state, action) => {
        if (action.payload.data.user.role === "ADMIN") {
          state.status = "success";
          state.accessToken = action.payload.data.accessToken;
          state.role = action.payload.data.user.role;
          state.isLogin = true;
          localStorage.setItem("accessToken", state.accessToken);
        } else {
          state.status = "failed";
          state.role = action.payload.data.user.role;
        }
      })
      .addCase(checkCode.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
        if (action.error) {
          toast.error("کد ارسالی صحیح نمیباشد !");
        } else {
          toast.error("خطایی در سرور رخ داده است !");
        }
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userInfo = action.payload.data.user;
        localStorage.setItem("userInfo", state.userInfo);
      });
  },
});

export const { logOut } = loginSlice.actions;
export default loginSlice.reducer;
