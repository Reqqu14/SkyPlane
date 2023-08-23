import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HEIGHT } from "../../constants/constants";

export default function Topic({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          name="notifications-sharp"
          size={HEIGHT * 0.034}
          color="gray"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: HEIGHT * 0.055,
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
    fontSize: HEIGHT * 0.028,
  },

  iconContainer: {
    position: "absolute",
    right: 0,
    padding: 5,
    marginRight: 10,
  },
});
