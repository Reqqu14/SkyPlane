import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HEIGHT } from "../../constants/constants";

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
    fontSize: HEIGHT * 0.04,
    fontWeight: "600",
    color: "#222222",
  },
});
