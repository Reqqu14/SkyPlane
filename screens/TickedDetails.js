import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import Card from "../components/TicketDetails/Card";
import { HEIGHT } from "../constants/constants";

export default function TickedDetails({ route }) {
  const navigation = useNavigation();
  const flightData = route.params.flightData;
  const seat = route.params.seat;

  function goBack() {
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <IconButton
            onPress={goBack}
            iconOptions={{
              name: "chevron-left",
              size: HEIGHT * 0.036,
              color: "#7b7b7b",
            }}
          />
        );
      },
      headerTitle: "Ticket details",
    });
  });

  return (
    <View style={styles.container}>
      <Card
        airport={flightData.airport}
        destination={flightData.destination}
        date={flightData.flightDate.date}
        seat={seat}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: HEIGHT * 0.026,
    backgroundColor: "white",
    borderRadius: HEIGHT * 0.026,
    marginTop: HEIGHT * 0.039,
    padding: HEIGHT * 0.026,
  },
});
