import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Topic from "../components/ReusableScreenComponents/Topic";
import Card from "../components/FlightDetails/Card";
import { ScrollView } from "react-native-gesture-handler";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { HEIGHT } from "../constants/constants";

export default function Wallet() {
  const [seats, setSeats] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const pastFlights = [1];
  const upcommingFlights = [1];

  const [flightDetails, setFlightDetails] = useState({});

  const flightData = useSelector((state) => {
    return state.flightDetailsData.flightDetails;
  });

  const seatsData = useSelector((state) => {
    return state.flightDetailsData.flightDetails.seats;
  });

  function goToTicketDetails(seat) {
    navigation.navigate("TicketDetails", {
      flightData: flightData,
      seat: seat,
    });
  }

  useEffect(() => {
    setFlightDetails(flightData);
    setSeats(seatsData);
  }, [isFocused]);

  useEffect(() => {}, [flightDetails]);

  function FlightDetails({ emptyText }) {
    return (
      <View>
        {Object.keys(flightDetails).length === 0 ? (
          <View style={styles.textContainer}>
            <Text style={styles.emptyTicketsText}>{emptyText}</Text>
          </View>
        ) : (
          <View>
            {seats.map((seat, index) => {
              return (
                <TouchableOpacity
                  style={styles.detailsContainer}
                  onPress={() => goToTicketDetails(seat)}
                  key={index}
                >
                  <Card
                    price={flightDetails.price}
                    destination={flightDetails.destination}
                    airport={flightDetails.airport}
                    ticketType={flightDetails.ticketType}
                    ticketTypeStyle={flightData.ticketTypeStyle}
                    flightDate={flightData.flightDate}
                    seat={seat}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Topic>Wallet</Topic>
      <ScrollView style={styles.ticketsContainer}>
        <Text style={styles.header}>Upcomming flights</Text>
        {upcommingFlights.map((row) => {
          return (
            <FlightDetails
              key={row}
              emptyText="You don't have upcoming tickets"
            />
          );
        })}
        <Text style={styles.header}>Past flights</Text>
        {pastFlights.map((row) => {
          return (
            <View style={styles.textContainer} key={row}>
              <Text style={styles.emptyTicketsText}>
                You don't have past tickets yet
              </Text>
            </View>
          );
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

  textContainer: {
    marginVertical: HEIGHT * 0.065,
    alignItems: "center",
  },

  emptyTicketsText: {
    fontSize: HEIGHT * 0.026,
    fontWeight: "600",
  },
});
