import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./cities";
import airportReducer from "./airports";
import flightDetailsReducer from "./flightDetails";

export const store = configureStore({
  reducer: {
    cityData: citiesReducer,
    airportData: airportReducer,
    flightDetailsData: flightDetailsReducer,
  },
});
