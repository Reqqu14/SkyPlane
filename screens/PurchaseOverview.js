import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import Card from "../components/FlightDetails/Card";
import { ScrollView } from "react-native-gesture-handler";
import PassengerDetails from "../components/PurchaseOverview/PassengerDetails";
import GoNextButton from "../components/GoNextButton";
import { useSelector } from "react-redux";
import { HEIGHT } from "../constants/constants";

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
              size: HEIGHT * 0.036,
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
    marginHorizontal: HEIGHT * 0.026,
  },

  detailsContainer: {
    borderRadius: HEIGHT * 0.026,
    marginTop: HEIGHT * 0.039,
    padding: HEIGHT * 0.026,
    backgroundColor: "white",
  },

  goNextButtonContainer: {
    marginVertical: HEIGHT * 0.039,
  },
});
