import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function HorizontalLineWithIcon({ iconProperties }) {
  return (
    <View style={styles.container}>
      <View style={styles.hr}></View>
      <View style={styles.hrIcon}>
        <MaterialIcons {...iconProperties} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    justifyContent: "center",
  },

  hr: {
    borderColor: "#e2dfdf",
    borderWidth: 0.5,
  },

  hrIcon: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#e5e3e3",
    borderRadius: 12,
  },
});
