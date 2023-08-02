import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search for a route</Text>
      <Ionicons name="search" size={28} color="#dad9d9" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 40,
  },
  text: {
    fontSize: 16,
    color: "#898989",
  },
});
