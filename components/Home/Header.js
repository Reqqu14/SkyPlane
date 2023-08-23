import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HEIGHT } from "../../constants/constants";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find your dream destination</Text>
      <Ionicons name="notifications-sharp" size={HEIGHT * 0.044} color="gray" />
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
    fontSize: HEIGHT * 0.036,
    fontWeight: "600",
    color: "#222222",
    width: "70%",
  },
});
