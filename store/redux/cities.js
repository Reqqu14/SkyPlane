import { createSlice } from "@reduxjs/toolkit";

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [
      {
        Id: 1,
        Name: "London",
        Image: require("../../assets/images/countries/london.jpeg"),
        Continent: "Europe",
        Country: "Great Britain",
        Population: "6mln",
        Airport: "LGW",
        AirportFullName: "Gatwick",
        CityDistance: "50km",
        From: "80$",
        To: "800$",
      },
      {
        Id: 2,
        Name: "Barcelona",
        Image: require("../../assets/images/countries/barcelona.jpeg"),
        Continent: "Europe",
        Country: "Spain",
        Population: "3mln",
        Airport: "BAR",
        AirportFullName: "Barcelona air",
        CityDistance: "20km",
        From: "40$",
        To: "654$",
      },
      {
        Id: 3,
        Name: "Lisbon",
        Image: require("../../assets/images/countries/lisbon.jpeg"),
        Continent: "Europe",
        Country: "Portugal",
        Population: "16mln",
        Airport: "LIS",
        AirportFullName: "Lisbon air",
        CityDistance: "49km",
        From: "80$",
        To: "600$",
      },
      {
        Id: 4,
        Name: "Mallorca",
        Image: require("../../assets/images/countries/mallorca.jpeg"),
        Continent: "Europe",
        Country: "Spain",
        Population: "1mln",
        Airport: "MAL",
        AirportFullName: "Santa Mallo",
        CityDistance: "10km",
        From: "120$",
        To: "1356$",
      },
      {
        Id: 5,
        Name: "Mexico",
        Image: require("../../assets/images/countries/mexico.jpeg"),
        Continent: "America",
      },
      {
        Id: 6,
        Name: "New York",
        Image: require("../../assets/images/countries/newYork.jpg"),
        Continent: "America",
      },
      {
        Id: 7,
        Name: "Chicago",
        Image: require("../../assets/images/countries/chicago.jpg"),
        Continent: "America",
      },
      {
        Id: 8,
        Name: "San Francisco",
        Image: require("../../assets/images/countries/sanFrancisco.jpg"),
        Continent: "America",
      },
      {
        Id: 9,
        Name: "Pekin",
        Image: require("../../assets/images/countries/pekin.jpg"),
        Continent: "Asia",
      },
      {
        Id: 10,
        Name: "Tokyo",
        Image: require("../../assets/images/countries/tokyo.jpg"),
        Continent: "Asia",
      },
    ],
    selectedCity: null,
  },
  reducers: {
    getCityById: (state, action) => {
      state.selectedCity = state.cities.find((x) => x.Id === action.payload.Id);
    },
  },
});

export const getCityById = citiesSlice.actions.getCityById;
export default citiesSlice.reducer;
