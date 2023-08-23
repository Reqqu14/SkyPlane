import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HEIGHT } from "../../constants/constants";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search for a route</Text>
      <Ionicons name="search" size={HEIGHT * 0.036} color="#dad9d9" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: HEIGHT * 0.051,
    backgroundColor: "white",
    padding: HEIGHT * 0.013,
    borderRadius: 40,
  },
  text: {
    fontSize: HEIGHT * 0.02,
    color: "#898989",
  },
});
