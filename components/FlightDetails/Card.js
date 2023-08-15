import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Button from "../Button";

export default function Card({ backgroundColor }) {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.flightInformationContainer}>
        <View>
          <Text style={styles.topicText}>Outgoing flight</Text>
          <Text style={styles.flightDestinationText}>
            Friday, 16th September, 2023
          </Text>
        </View>
        <View>
          <Image source={require("../../assets/images/logo.png")} />
        </View>
      </View>
      <View style={styles.airportContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.airportFullText}>London Gatwick</Text>
          <Text style={styles.airportShortText}>LGW</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.airportFullText}>Berlin Brendenburg</Text>
          <Text style={styles.airportShortText}>BER</Text>
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
          <Text style={styles.timeText}>11:00 PM</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={{ flex: 1 }}>
          <Button
            buttonStyle={styles.buttonStyle}
            buttonText={styles.customButtonText}
          >
            BASIC
          </Button>
        </View>
        <View style={styles.test}>
          <Text style={styles.priceText}>$ 185</Text>
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
    width: 70,
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
