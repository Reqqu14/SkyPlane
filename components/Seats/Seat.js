import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HEIGHT } from "../../constants/constants";

export default function Seat({ style, seatSelected, id }) {
  return (
    <View style={[styles.seat, style]}>
      {seatSelected ? <Text style={styles.selectedSeat}>{id}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  seat: {
    width: HEIGHT * 0.041,
    height: HEIGHT * 0.041,
    borderRadius: HEIGHT * 0.016,
    marginBottom: HEIGHT * 0.019,
    marginHorizontal: HEIGHT * 0.013,
    justifyContent: "center",
  },

  selectedSeat: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
