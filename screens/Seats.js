import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import SeatsLegend from "../components/Seats/SeatsLegend";
import Card from "../components/Seats/Card";
import GoNextButton from "../components/GoNextButton";
import { HEIGHT } from "../constants/constants";
import { useDispatch } from "react-redux";
import { updateSeats } from "../store/redux/flightDetails";

export default function Seats() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function selectedSeatsHandler(seat, selected) {
    if (selected) {
      setSelectedSeats((current) => [...current, seat]);
    } else {
      setSelectedSeats((current) => [...current.filter((x) => x !== seat)]);
    }
  }

  function goBack() {
    navigation.goBack();
  }

  function goToNextPage() {
    if (selectedSeats.length === 0) {
      Alert.alert("Chose a seats before checkout !");
      return;
    }
    dispatch(updateSeats(selectedSeats));
    navigation.navigate("PurchaseOverview");
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
      headerTitle: "Choose seats",
    });
  });

  return (
    <View style={styles.container}>
      <SeatsLegend />
      <View style={styles.cardContainer}>
        <Card selectedSeatsHandler={selectedSeatsHandler} />
        <View style={styles.goNextButtonContainer}>
          <GoNextButton onPress={goToNextPage}>Checkout</GoNextButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: HEIGHT * 0.026,
    paddingHorizontal: HEIGHT * 0.039,
  },

  cardContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: HEIGHT * 0.026,
    marginTop: HEIGHT * 0.032,
  },
});
