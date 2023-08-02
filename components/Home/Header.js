import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find your dream destination</Text>
      <Ionicons name="notifications-sharp" size={34} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#222222",
    width: "70%",
  },
});
