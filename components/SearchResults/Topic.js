import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Topic({ destination, airport }) {
  return (
    <View>
      <Text style={styles.topic}>
        {airport} - {destination}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topic: {
    fontSize: 32,
    fontWeight: "600",
    color: "#222222",
  },
});
