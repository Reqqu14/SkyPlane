import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";

export default function Card({
  topButtonText,
  topButtonStyle,
  price,
  departureTime,
  centerTravelTime,
}) {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate("FlightDetails");
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
        <Image source={require("../../assets/images/logo.png")} />
      </View>
      <View style={styles.cardTopicsContainer}>
        <View>
          <View style={styles.details}>
            <Text style={styles.price}>$ {price}</Text>
          </View>
          <View>
            <Text style={styles.detailsText}>LGW - BER</Text>
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
    marginTop: 20,
    padding: 10,
  },

  customButtonText: {
    color: "white",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  buttonContainer: {
    position: "absolute",
    alignSelf: "baseline",
    marginTop: -12,
    marginLeft: 30,
  },

  iconContainer: {
    alignItems: "flex-end",
  },

  cardTopicsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginBottom: 20,
    marginTop: 10,
  },

  price: {
    fontSize: 24,
    fontWeight: "600",
    color: "#222222",
  },

  time: {
    fontSize: 12,
    fontWeight: "600",
    color: "#7b7b7b",
  },

  detailsText: {
    color: "#222222",
  },

  details: {
    marginBottom: 10,
  },

  pressed: {
    opacity: 0.55,
  },
});
