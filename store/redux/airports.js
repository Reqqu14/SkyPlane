import { createSlice } from "@reduxjs/toolkit";

const airportSlice = createSlice({
  name: "airports",
  initialState: {
    airports: [
      { label: "London Gatwick", value: "LGW" },
      { label: "Barcelona Airport", value: "BAR" },
      { label: "Lisbon Airport", value: "LIS" },
      { label: "Santa Mallo", value: "MAL" },
      { label: "Santa Mexico", value: "MEX" },
      { label: "JFK Airport", value: "JFK" },
      { label: "Chicago Airport", value: "CHI" },
      { label: "San Francisco Airport", value: "SFA" },
      { label: "Pekin Airport", value: "PAI" },
      { label: "Tokyo Airport", value: "TAI" },
    ],
  },
  reducers: {},
});

export default airportSlice.reducer;
