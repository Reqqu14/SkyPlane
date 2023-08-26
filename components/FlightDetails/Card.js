import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { getAirportByCode } from "../../store/redux/airports";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { HEIGHT } from "../../constants/constants";

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
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.iconImage}
          />
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
            size={HEIGHT * 0.026}
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
        <View style={styles.price}>
          <Text style={styles.priceText}>{price} $</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: HEIGHT * 0.026,
  },

  flightInformationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: HEIGHT * 0.032,
  },

  topicText: {
    fontSize: HEIGHT * 0.016,
    fontWeight: "600",
    color: "#222222",
    marginBottom: 5,
  },

  flightDestinationText: {
    fontSize: HEIGHT * 0.016,
    color: "#7b7b7b",
  },

  iconImage: {
    width: HEIGHT * 0.04,
    height: HEIGHT * 0.04,
  },

  airportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  airportFullText: {
    fontSize: HEIGHT * 0.017,
    color: "#7b7b7b",
  },

  airportShortText: {
    fontSize: HEIGHT * 0.031,
    fontWeight: "600",
    color: "#222222",
  },

  timeDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: HEIGHT * 0.019,
    justifyContent: "space-around",
  },

  hourAndArrowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    marginLeft: HEIGHT * 0.032,
  },

  timeText: {
    fontSize: HEIGHT * 0.021,
    fontWeight: "600",
    color: "#222222",
  },

  footerContainer: {
    marginTop: HEIGHT * 0.039,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonStyle: {
    backgroundColor: "#009688",
    padding: 3,
    borderRadius: 60,
    width: HEIGHT * 0.103,
  },

  customButtonText: {
    color: "white",
    fontSize: HEIGHT * 0.016,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  priceText: {
    fontSize: HEIGHT * 0.031,
    fontWeight: "600",
    color: "#222222",
  },

  price: {
    flex: 1,
  },
});
