import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Topic() {
  return (
    <View>
      <Text style={styles.topic}>LGW - BER</Text>
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
