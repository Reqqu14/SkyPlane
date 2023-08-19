import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Seat({ style, seatSelected, id }) {
  return (
    <View style={[styles.seat, style]}>
      {seatSelected ? <Text style={styles.selectedSeat}>{id}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  seat: {
    width: 32,
    height: 32,
    borderRadius: 12,
    marginBottom: 15,
    marginHorizontal: 10,
    justifyContent: "center",
  },

  selectedSeat: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
