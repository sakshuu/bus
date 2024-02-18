import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const REACT_APP_API_URL = "http://localhost:8084/bus-dailycus-user-service";

export const userRegister = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post(
        `${REACT_APP_API_URL}/signUp?otp=${user.otp}`,
        user
      );
      return data;
    } catch (error) {
      console.error("API Error:", error.message);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const ChangePasswordUser = createAsyncThunk(
  "auth/changepass",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post(
        `${REACT_APP_API_URL}/userChangePassword`,
        userData
      );

      return data;
    } catch (error) {
      console.warn(error);
      return rejectWithValue(
        error.response ? error.response.data : error.messageror
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post(
        `${REACT_APP_API_URL}/userLogin`,
        userData
      );
      return data;
    } catch (error) {
      console.warn(error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const OtpUsers = createAsyncThunk(
  "auth/get/otp",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.get(
        `${REACT_APP_API_URL}/generate/${userData.mobileNumber}/${userData.emailId}/${userData.type}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.messageror
      );
    }
  }
);

export const resetPasswordUser = createAsyncThunk(
  "auth/resetpass",
  async (userData, { rejectWithValue, getState }) => {
    try {
      debugger;
      const { data } = await axios.post(
        `${REACT_APP_API_URL}/resetPasswordChange/?otp=${userData.otp}`,
        userData
      );
      return data;
    } catch (error) {
      console.warn(error);
      return rejectWithValue(
        error.response ? error.response.data : error.messageror
      );
    }
  }
);

export const changePasswordUser = createAsyncThunk(
  "auth/changepass",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post();

      return data;
    } catch (error) {
      console.warn(error);
      return rejectWithValue(
        error.response ? error.response.data : error.messageror
      );
    }
  }
);
