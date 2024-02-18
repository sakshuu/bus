import { createSlice } from "@reduxjs/toolkit";
import { BusSearch } from "./busAction";

const initialState = {
  loading: false,
  isbusSearch: false,

  error: null,
};

export const busSlice = createSlice({
  name: "busSchedule",
  initialState: initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(BusSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(BusSearch.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isbusSearch = payload;
      })
      .addCase(BusSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default busSlice.reducer;
