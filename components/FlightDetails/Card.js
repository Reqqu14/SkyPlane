import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { getAirportByCode } from "../../store/redux/airports";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";

export default function Card({
  backgroundColor,
  price,
  airport,
  destination,
  ticketType,
  ticketTypeStyle,
  flightDate,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAirportByCode({ code: airport, type: "airport" }));
    dispatch(
      getAirportByCode({ code: destination, type: "destinationAirport" })
    );
  }, []);

  const airportdata = useSelector((state) => state.airportData.selectedAirport);
  const destinationAirportData = useSelector(
    (state) => state.airportData.destinationAirport
  );

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.flightInformationContainer}>
        <View>
          <Text style={styles.topicText}>Outgoing flight</Text>
          <Text style={styles.flightDestinationText}>
            {flightDate.fullDate}
          </Text>
        </View>
        <View>
          <Image source={require("../../assets/images/logo.png")} />
        </View>
      </View>
      <View style={styles.airportContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.airportFullText}>{airportdata?.label}</Text>
          <Text style={styles.airportShortText}>{airport}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.airportFullText}>
            {destinationAirportData?.label}
          </Text>
          <Text style={styles.airportShortText}>{destination}</Text>
        </View>
      </View>
      <View style={styles.timeDetailsContainer}>
        <View style={styles.hourAndArrowContainer}>
          <Text style={styles.timeText}>1:00 PM</Text>
          <Entypo
            name="arrow-right"
            size={20}
            color="#222222"
            style={styles.image}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.timeText}>04:00 PM</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={{ flex: 1 }}>
          <Button
            buttonStyle={[
              styles.buttonStyle,
              { backgroundColor: ticketTypeStyle },
            ]}
            buttonText={styles.customButtonText}
          >
            {ticketType}
          </Button>
        </View>
        <View style={styles.test}>
          <Text style={styles.priceText}>{price} $</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
  },

  flightInformationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  topicText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#222222",
    marginBottom: 5,
  },

  flightDestinationText: {
    fontSize: 12,
    color: "#7b7b7b",
  },

  airportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  airportFullText: {
    fontSize: 13,
    color: "#7b7b7b",
  },

  airportShortText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#222222",
  },

  timeDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    justifyContent: "space-around",
  },

  hourAndArrowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    marginLeft: 25,
  },

  timeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
  },

  footerContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonStyle: {
    backgroundColor: "#009688",
    padding: 3,
    borderRadius: 60,
    width: 80,
  },

  customButtonText: {
    color: "white",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  priceText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#222222",
  },

  test: {
    flex: 1,
  },
});
