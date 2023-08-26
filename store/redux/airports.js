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
      { label: "Tokyo Airport", value: "TAK" },
    ],
    selectedAirport: {},
    destinationAirport: {},
  },
  reducers: {
    getAirportByCode: (state, action) => {
      if (action.payload.type === "airport") {
        state.selectedAirport = state.airports.find(
          (x) => x.value === action.payload.code
        );
      } else if (action.payload.type === "destinationAirport") {
        state.destinationAirport = state.airports.find(
          (x) => x.value === action.payload.code
        );
      }
    },
  },
});
export const getAirportByCode = airportSlice.actions.getAirportByCode;
export default airportSlice.reducer;
