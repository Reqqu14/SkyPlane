import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "./Button";

export default function GoNextButton({ children, onPress }) {
  return (
    <View style={styles.searchButtonContainer}>
      <Button
        buttonStyle={styles.buttonCustomStyle}
        buttonText={styles.customButtonText}
        onPress={onPress}
      >
        {children}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  searchButtonContainer: {
    marginTop: 40,
  },

  buttonCustomStyle: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 60,
  },

  customButtonText: {
    fontWeight: "500",
    color: "white",
    fontSize: 16,
  },
});
