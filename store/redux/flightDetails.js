import { createSlice } from "@reduxjs/toolkit";

const flightDetailsSlice = createSlice({
  name: "details",
  initialState: {
    flightDetails: {},
  },
  reducers: {
    setDetails: (state, action) => {
      state.flightDetails = action.payload;
    },
    updateSeats: (state, action) => {
      state.flightDetails.seats = action.payload;
    },
  },
});

export const { setDetails, updateSeats } = flightDetailsSlice.actions;
export default flightDetailsSlice.reducer;
