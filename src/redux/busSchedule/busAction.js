import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const REACT_APP_API_URL = "http://localhost:8084/bus-dailycus-booking-services";

export const BusSearch = createAsyncThunk(
  "busSchedule/search",
  async (userSearch, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.get(
        `${REACT_APP_API_URL}/checkBusSchedule`,
        userSearch
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
