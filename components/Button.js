import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function Button({ children, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009688",
    padding: 20,
    borderRadius: 60,
    marginHorizontal: 25,
  },

  buttonText: {
    fontWeight: "500",
    color: "white",
    fontSize: 16,
  },

  pressed: {
    opacity: 0.85,
  },
});
