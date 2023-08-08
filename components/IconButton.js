import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function IconButton({ iconOptions, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[({ pressed }) => pressed && styles.pressed, styles.icon]}
    >
      <Entypo {...iconOptions} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },

  icon: {
    marginLeft: 10,
  },
});
