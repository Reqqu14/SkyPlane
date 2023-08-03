import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function Button({ children, onPress, buttonStyle, buttonText }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.buttonContainer, buttonStyle]}>
          <Text style={[buttonText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  pressed: {
    opacity: 0.85,
  },
});
