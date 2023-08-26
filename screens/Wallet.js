import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Topic from "../components/ReusableScreenComponents/Topic";
import Card from "../components/FlightDetails/Card";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { HEIGHT } from "../constants/constants";

export default function Wallet() {
  const navigation = useNavigation();
  const pastFlights = [1, 2, 3];
  const upcommingFlights = [1, 2, 3];

  const [flightDetails, setFlightDetails] = useState({});
  const flightData = useSelector((state) => {
    return state.flightDetailsData.flightDetails;
  });

  function goToTicketDetails() {
    navigation.navigate("TicketDetails");
  }

  useEffect(() => {
    setFlightDetails(flightData);
  }, []);

  function FlightDetails() {
    return (
      <TouchableOpacity
        style={styles.detailsContainer}
        onPress={goToTicketDetails}
      >
        <Card
          price={flightDetails.price}
          destination={flightDetails.destination}
          airport={flightDetails.airport}
          ticketType={flightDetails.ticketType}
          ticketTypeStyle={flightData.ticketTypeStyle}
          flightDate={flightData.flightDate}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Topic>Wallet</Topic>
      <ScrollView style={styles.ticketsContainer}>
        <Text style={styles.header}>Upcomming flights</Text>
        {upcommingFlights.map((row) => {
          return <FlightDetails key={row} />;
        })}
        <Text style={styles.header}>Past flights</Text>
        {pastFlights.map((row) => {
          return <FlightDetails key={row} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ticketsContainer: {
    marginHorizontal: HEIGHT * 0.039,
    marginTop: HEIGHT * 0.039,
  },

  header: {
    color: "#222222",
    fontSize: HEIGHT * 0.021,
    fontWeight: "600",
  },
  detailsContainer: {
    borderRadius: HEIGHT * 0.026,
    marginVertical: HEIGHT * 0.039,
    backgroundColor: "white",
  },
});
