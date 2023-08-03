import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Input({
  label,
  text,
  addRight,
  leftIconProperties,
  addLeft,
  rightIconProperties,
  IconContainerStyle,
}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {addLeft ? (
          <View style={IconContainerStyle}>
            <FontAwesome {...leftIconProperties} />
          </View>
        ) : null}
        <Text style={styles.text}>{text}</Text>
        {addRight ? (
          <View style={IconContainerStyle}>
            <FontAwesome {...rightIconProperties} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
    color: "#7b7b7b",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#222222",
    fontWeight: "500",
    marginBottom: 10,
    marginRight: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});
