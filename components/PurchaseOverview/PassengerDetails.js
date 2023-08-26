import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { HEIGHT } from "../../constants/constants";

export default function PassengerDetails() {
  return (
    <View>
      <View>
        <Text style={styles.topic}>Passenger 1</Text>
      </View>
      <View>
        <View style={styles.detailsContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Time</Text>
            <Text style={styles.headerText}>Abel Summer</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Seat</Text>
            <Text style={styles.headerText}>B3</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Date</Text>
            <Text style={styles.headerText}>16/9/2023</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Gate</Text>
            <Text style={styles.headerText}>A24</Text>
          </View>
        </View>
      </View>
      <View style={styles.barcodeContainer}>
        <Image
          source={require("../../assets/images/barcode.png")}
          style={styles.barcode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topic: {
    fontSize: HEIGHT * 0.021,
    fontWeight: "600",
    color: "#009688",
  },

  detailsContainer: {
    flexDirection: "row",
    marginVertical: HEIGHT * 0.02,
  },

  header: {
    color: "#7b7b7b",
    fontSize: HEIGHT * 0.016,
    fontWeight: "600",
  },

  headerText: {
    color: "#222222",
    fontSize: HEIGHT * 0.021,
    fontWeight: "600",
  },

  barcodeContainer: {
    alignItems: "center",
    marginVertical: HEIGHT * 0.013,
  },

  barcode: {
    width: "100%",
  },
});
