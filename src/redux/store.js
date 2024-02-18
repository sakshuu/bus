import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import busSlice from "./busSchedule/busSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    busSchedule: busSlice,
  },
});

export default store;
