import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "./Button";
import { HEIGHT } from "../constants/constants";

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
    marginTop: HEIGHT * 0.052,
  },

  buttonCustomStyle: {
    backgroundColor: "black",
    padding: HEIGHT * 0.02,
    borderRadius: 60,
  },

  customButtonText: {
    fontWeight: "500",
    color: "white",
    fontSize: HEIGHT * 0.021,
  },
});
