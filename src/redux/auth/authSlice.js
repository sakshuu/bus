import { createSlice } from "@reduxjs/toolkit";
import {
  OtpUsers,
  loginUser,
  userRegister,
  ChangePasswordUser,
} from "./authActions";

const initialState = {
  loading: false,
  isLoggedIn: false,
  isRegister: false,
  error: null,
  userHistory: null,
  otp: null,
  registerError: null,
  otpUser: null,
  otpUsersError: null,
};

export const authSlices = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    setUserHistory: (state, action) => {
      state.userHistory = action.payload;
    },
    setOTP: (state, action) => {
      state.otp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isRegister = true;
      })
      .addCase(userRegister.rejected, (state, { payload }) => {
        state.loading = false;
        state.registerError = payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLoggedIn = payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(OtpUsers.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(OtpUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.otpUser = payload;
        state;
      })
      .addCase(OtpUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.otpUsersError = payload;
      })

      .addCase(ChangePasswordUser.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(ChangePasswordUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.changePasswordUser = payload;
      })
      .addCase(ChangePasswordUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.ChangePasswordUserError = payload;
      });
  },
});
export const { setUserHistory, setOTP } = authSlices.actions;
export default authSlices.reducer;
