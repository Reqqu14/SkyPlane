import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../../components/IconButton";
import Topic from "../../components/SearchResults/Topic";
import DayList from "../../components/SearchResults/DayList";
import Card from "../../components/SearchResults/Card";
import GoNextButton from "../../components/GoNextButton";
import { ScrollView } from "react-native-gesture-handler";
import { getData } from "../../store/asyncStorage/asyncStorage";
import { HEIGHT } from "../../constants/constants";

export default function SearchResult({ route }) {
  const { destinationAirport, cheapest, premium } = route.params;
  const popular = premium - 3 * cheapest;
  const extraDayPrices = {
    Mon: { cheapest: 15, popular: 30, premium: 60 },
    Tue: { cheapest: 12, popular: 28, premium: 55 },
    Wed: { cheapest: 18, popular: 35, premium: 70 },
    Thu: { cheapest: 14, popular: 32, premium: 65 },
    Fri: { cheapest: 20, popular: 40, premium: 80 },
    Sat: { cheapest: 10, popular: 25, premium: 50 },
    Sun: { cheapest: 33, popular: 76, premium: 99 },
  };
  const navigation = useNavigation();
  const [airport, setAirport] = useState("");
  const [selectedDay, setSelectedDay] = useState({});
  const [prices, setPrices] = useState({
    cheapest: cheapest,
    popular: popular,
    premium: premium,
  });

  function GoBack() {
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <IconButton
            onPress={GoBack}
            iconOptions={{
              name: "chevron-left",
              size: HEIGHT * 0.036,
              color: "#7b7b7b",
            }}
          />
        );
      },
      headerTitle: "Search for flight",
    });
  }, [navigation]);

  useEffect(() => {
    getAirportFromProfileData();
  }, []);

  async function getAirportFromProfileData() {
    const profileData = await getData("profile");
    const parsedData = JSON.parse(profileData);
    setAirport(parsedData.airport);
  }

  function setSelectedDaysHandler(day) {
    setSelectedDay(day);
    const newPrices = extraDayPrices[day.dayOfWeek];
    setPrices((current) => ({
      ...current,
      cheapest: cheapest + newPrices.cheapest,
      popular: popular + newPrices.popular,
      premium: premium + newPrices.premium,
    }));
  }

  return (
    <View style={styles.container}>
      <Topic destination={destinationAirport} airport={airport} />
      <DayList setSelectedDay={setSelectedDaysHandler} />
      <Text style={styles.text}>Recommended</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          topButtonText="Cheapest"
          topButtonStyle={styles.cheapestButtonStyle}
          price={prices.cheapest}
          departureTime="4h 20m"
          centerTravelTime="DUS 1h"
          destination={destinationAirport}
          airport={airport}
          flightDate={selectedDay}
        />
        <Card
          topButtonText="Popular"
          topButtonStyle={styles.popularButtonStyle}
          price={prices.popular}
          departureTime="1h 20m"
          centerTravelTime="-"
          destination={destinationAirport}
          airport={airport}
          flightDate={selectedDay}
        />
        <Card
          topButtonText="Premium"
          topButtonStyle={styles.premiumButtonStyle}
          price={prices.premium}
          departureTime="1h 5m"
          centerTravelTime="-"
          destination={destinationAirport}
          airport={airport}
          flightDate={selectedDay}
        />
      </ScrollView>
      <GoNextButton onPress={GoBack}>View all flights</GoNextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: HEIGHT * 0.025,
    paddingHorizontal: HEIGHT * 0.039,
  },

  text: {
    marginTop: HEIGHT * 0.02,
    fontSize: HEIGHT * 0.023,
    fontWeight: "600",
    color: "#222222",
  },

  cheapestButtonStyle: {
    backgroundColor: "#898989",
    padding: 4,
    borderRadius: 60,
    width: HEIGHT * 0.116,
  },

  popularButtonStyle: {
    backgroundColor: "#009688",
    padding: 4,
    borderRadius: 60,
    width: HEIGHT * 0.116,
  },

  premiumButtonStyle: {
    backgroundColor: "#ffc125",
    padding: 4,
    borderRadius: 60,
    width: HEIGHT * 0.116,
  },
});
