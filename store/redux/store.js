import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./cities";

export const store = configureStore({
  reducer: {
    cityData: citiesReducer,
  },
});
