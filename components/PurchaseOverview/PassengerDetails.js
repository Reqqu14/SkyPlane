import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

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
    fontSize: 16,
    fontWeight: "600",
    color: "#009688",
  },

  detailsContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },

  header: {
    color: "#7b7b7b",
    fontSize: 12,
    fontWeight: "600",
  },

  headerText: {
    color: "#222222",
    fontSize: 16,
    fontWeight: "600",
  },

  barcodeContainer: {
    alignItems: "center",
    marginVertical: 10,
  },

  barcode: {
    width: "100%",
  },
});
