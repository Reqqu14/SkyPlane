import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../../components/IconButton";
import Topic from "../../components/SearchResults/Topic";
import DayList from "../../components/SearchResults/DayList";
import Card from "../../components/SearchResults/Card";
import GoNextButton from "../../components/GoNextButton";
import { ScrollView } from "react-native-gesture-handler";

export default function SearchResult({ route }) {
  const navigation = useNavigation();

  const { airport } = route.params;

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
              size: 28,
              color: "#7b7b7b",
            }}
          />
        );
      },
      headerTitle: "Search for flight",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Topic destination={airport} />
      <DayList />
      <Text style={styles.text}>Recommended</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          topButtonText="Cheapest"
          topButtonStyle={styles.cheapestButtonStyle}
          price="90"
          departureTime="4h 20m"
          centerTravelTime="DUS 1h"
          destination={airport}
        />
        <Card
          topButtonText="Popular"
          topButtonStyle={styles.popularButtonStyle}
          price="185"
          departureTime="1h 20m"
          centerTravelTime="-"
          destination={airport}
        />
        <Card
          topButtonText="Premium"
          topButtonStyle={styles.premiumButtonStyle}
          price="399"
          departureTime="1h 5m"
          centerTravelTime="-"
          destination={airport}
        />
      </ScrollView>
      <GoNextButton onPress={GoBack}>View all flights</GoNextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    paddingHorizontal: 30,
  },

  text: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "600",
    color: "#222222",
  },

  cheapestButtonStyle: {
    backgroundColor: "#898989",
    padding: 4,
    borderRadius: 60,
    width: 90,
  },

  popularButtonStyle: {
    backgroundColor: "#009688",
    padding: 4,
    borderRadius: 60,
    width: 90,
  },

  premiumButtonStyle: {
    backgroundColor: "#ffc125",
    padding: 4,
    borderRadius: 60,
    width: 90,
  },
});
