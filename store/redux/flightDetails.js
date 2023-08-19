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
  },
});

export const setDetails = flightDetailsSlice.actions.setDetails;
export default flightDetailsSlice.reducer;
