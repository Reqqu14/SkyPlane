import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { HEIGHT } from "../constants/constants";

export default function CustomTextInput({ label, textInputConfig, invalid }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        {...textInputConfig}
        style={[styles.input, invalid && styles.invalidInput]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  label: {
    fontSize: 12,
    color: "#7b7b7b",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#f9f3f3",
    padding: HEIGHT * 0.01,
    borderRadius: 6,
    fontSize: 16,
  },

  invalidLabel: {
    color: "red",
  },

  invalidInput: {
    backgroundColor: "#efd7dc",
  },
});
