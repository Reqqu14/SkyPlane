import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./cities";
import airportReducer from "./airports";

export const store = configureStore({
  reducer: {
    cityData: citiesReducer,
    airportData: airportReducer,
  },
});
