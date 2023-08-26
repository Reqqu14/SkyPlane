import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";
import { HEIGHT } from "../../constants/constants";

export default function Card({
  topButtonText,
  topButtonStyle,
  price,
  departureTime,
  centerTravelTime,
  destination,
  airport,
  flightDate,
}) {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate("FlightDetails", {
      price: price,
      airport: airport,
      destination: destination,
      ticketType: topButtonText,
      ticketTypeStyle: topButtonStyle.backgroundColor,
      flightDate: flightDate,
    });
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        pressed ? styles.pressed : null,
        styles.container,
      ]}
    >
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={topButtonStyle}
          buttonText={styles.customButtonText}
        >
          {topButtonText}
        </Button>
      </View>
      <View style={styles.iconContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.cardTopicsContainer}>
        <View>
          <View style={styles.details}>
            <Text style={styles.price}>$ {price}</Text>
          </View>
          <View>
            <Text style={styles.detailsText}>
              {airport} - {destination}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.details}>
            <Text style={styles.time}>Time</Text>
          </View>
          <View>
            <Text style={styles.detailsText}>{departureTime}</Text>
          </View>
        </View>
        <View>
          <View style={styles.details}>
            <Text style={styles.time}>Time</Text>
          </View>
          <View>
            <Text style={styles.detailsText}>{centerTravelTime}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: HEIGHT * 0.026,
    padding: HEIGHT * 0.013,
  },

  customButtonText: {
    color: "white",
    fontSize: HEIGHT * 0.015,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  buttonContainer: {
    position: "absolute",
    alignSelf: "baseline",
    marginTop: -HEIGHT * 0.015,
    marginLeft: HEIGHT * 0.039,
  },

  iconContainer: {
    alignItems: "flex-end",
  },

  image: {
    width: HEIGHT * 0.046,
    height: HEIGHT * 0.046,
  },

  cardTopicsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: HEIGHT * 0.026,
    marginTop: HEIGHT * 0.013,
  },

  price: {
    fontSize: HEIGHT * 0.031,
    fontWeight: "600",
    color: "#222222",
  },

  time: {
    fontSize: HEIGHT * 0.016,
    fontWeight: "600",
    color: "#7b7b7b",
  },

  detailsText: {
    color: "#222222",
    fontSize: HEIGHT * 0.02,
  },

  details: {
    marginBottom: HEIGHT * 0.013,
  },

  pressed: {
    opacity: 0.55,
  },
});
