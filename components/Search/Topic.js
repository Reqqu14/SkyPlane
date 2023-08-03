import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Topic() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Search for flight</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="notifications-sharp" size={26} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 8,
  },

  text: {
    color: "#7b7b7b",
    fontWeight: "500",
    fontSize: 22,
  },

  iconContainer: {
    position: "absolute",
    right: 0,
    padding: 5,
    marginRight: 10,
  },
});
