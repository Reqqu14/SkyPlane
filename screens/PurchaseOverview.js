import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import Card from "../components/FlightDetails/Card";
import { ScrollView } from "react-native-gesture-handler";
import PassengerDetails from "../components/PurchaseOverview/PassengerDetails";
import GoNextButton from "../components/GoNextButton";
import { useSelector } from "react-redux";

export default function PurchaseOverview() {
  const navigation = useNavigation();
  const [flightDetails, setFlightDetails] = useState({});
  const flightData = useSelector((state) => {
    return state.flightDetailsData.flightDetails;
  });

  function goBack() {
    navigation.goBack();
  }

  function goToNextPage() {
    navigation.navigate("Wallet");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <IconButton
            onPress={goBack}
            iconOptions={{
              name: "chevron-left",
              size: 28,
              color: "#7b7b7b",
            }}
          />
        );
      },
      headerTitle: "Your flight to Berlin",
    });
  });

  useEffect(() => {
    setFlightDetails(flightData);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Card
          backgroundColor="white"
          price={flightDetails.price}
          destination={flightDetails.destination}
          airport={flightDetails.airport}
          ticketType={flightDetails.ticketType}
          ticketTypeStyle={flightData.ticketTypeStyle}
          flightDate={flightData.flightDate}
        />
      </View>
      <View style={styles.detailsContainer}>
        <PassengerDetails />
      </View>
      <View style={styles.detailsContainer}>
        <PassengerDetails />
      </View>
      <View style={styles.goNextButtonContainer}>
        <GoNextButton onPress={goToNextPage}>Go to Wallet</GoNextButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  detailsContainer: {
    borderRadius: 20,
    marginTop: 30,
    padding: 20,
    backgroundColor: "white",
  },

  goNextButtonContainer: {
    marginVertical: 30,
  },
});
