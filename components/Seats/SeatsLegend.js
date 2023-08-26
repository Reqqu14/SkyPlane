import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Seat from "./Seat";
import { HEIGHT } from "../../constants/constants";

export default function SeatsLegend() {
  return (
    <View style={styles.container}>
      <View style={styles.seatsContainer}>
        <Seat style={{ backgroundColor: "#d9d9d9" }} />
        <Text style={styles.text}>Reserved</Text>
      </View>
      <View style={styles.seatsContainer}>
        <Seat style={{ backgroundColor: "#009688" }} />
        <Text style={styles.text}>Selected</Text>
      </View>
      <View style={styles.seatsContainer}>
        <Seat style={{ borderWidth: 1, borderColor: "black" }} />
        <Text style={styles.text}>Available</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  text: {
    fontSize: HEIGHT * 0.018,
    color: "#7b7b7b",
    fontWeight: "600",
  },

  seatsContainer: {
    alignItems: "center",
  },
});
