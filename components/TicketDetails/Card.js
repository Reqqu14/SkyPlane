import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Card() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={{ flex: 3 }}>
          <View>
            <Text style={[styles.topic, { color: "#ffc125" }]}>Tomasz</Text>
          </View>
          <View>
            <Text style={[styles.topic, { color: "#222222" }]}>Airlines</Text>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.header}>Flight</Text>
          <Text style={styles.headerText}>UT 111</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>Gate</Text>
          <Text style={styles.headerText}>A24</Text>
        </View>
      </View>
      <View>
        <View style={styles.destinationContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>London Gatwick</Text>
            <Text style={styles.headerText}>LGW</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Berlin Brendenburg</Text>
            <Text style={styles.headerText}>BER</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Passenger</Text>
            <Text style={styles.headerText}>A/SUMMER</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.header}>Seat</Text>
            <Text style={styles.headerText}>C</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Date</Text>
            <Text style={styles.headerText}>16/9/2023</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Boarding</Text>
            <Text style={styles.headerText}>12:40</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Departure</Text>
            <Text style={styles.headerText}>13:10</Text>
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
    fontSize: 20,
    fontWeight: "500",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  destinationContainer: {
    flexDirection: "row",
    marginVertical: 25,
  },

  detailsContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },

  header: {
    color: "#7b7b7b",
    fontSize: 14,
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
    marginTop: 50,
  },

  barcode: {
    width: "100%",
  },
});
