import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import Card from "../components/FlightDetails/Card";
import Button from "../components/Button";
import GoNextButton from "../components/GoNextButton";
import { useDispatch } from "react-redux";
import { setDetails } from "../store/redux/flightDetails";

export default function FilghtDetails({ route }) {
  const navigation = useNavigation();
  const {
    price,
    airport,
    destination,
    ticketType,
    ticketTypeStyle,
    flightDate,
  } = route.params;

  const dispatch = useDispatch();

  function goBack() {
    navigation.goBack();
  }

  function goToNextPage() {
    dispatch(
      setDetails({
        price: price,
        airport: airport,
        destination: destination,
        flightDate: flightDate,
        ticketType: ticketType,
        ticketTypeStyle: ticketTypeStyle,
      })
    );
    navigation.navigate("Seats");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <IconButton
            onPress={goBack}
            iconOptions={{
              name: "chevron-left",
              size: 28,
              color: "#7b7b7b",
            }}
          />
        );
      },
      headerTitle: `${airport} - ${destination}`,
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your selected flight</Text>
      <Card
        backgroundColor="#f4f4f4"
        price={price}
        destination={destination}
        airport={airport}
        ticketType={ticketType}
        ticketTypeStyle={ticketTypeStyle}
        flightDate={flightDate}
      />
      <View style={styles.buttonsContainer}>
        <Button
          buttonStyle={styles.buttonStyle}
          buttonText={styles.customButtonText}
        >
          Change fare
        </Button>
        <Button
          buttonStyle={styles.buttonStyle}
          buttonText={styles.customButtonText}
        >
          Add services
        </Button>
      </View>
      <View style={styles.goNextButtonContainer}>
        <GoNextButton onPress={goToNextPage}>Chose a seat</GoNextButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 30,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
    marginBottom: 25,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
  },

  buttonStyle: {
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#f4f4f4",
  },

  customButtonText: {
    color: "#222222",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  goNextButtonContainer: {
    marginTop: 120,
  },
});
