import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import Card from "../components/FlightDetails/Card";
import { ScrollView } from "react-native-gesture-handler";
import PassengerDetails from "../components/PurchaseOverview/PassengerDetails";
import GoNextButton from "../components/GoNextButton";

export default function PurchaseOverview() {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  function goToNextPage() {
    navigation.navigate("Wallet");
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
      headerTitle: "Your flight to Berlin",
    });
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Card backgroundColor="white" />
      </View>
      <View style={styles.detailsContainer}>
        <PassengerDetails />
      </View>
      <View style={styles.detailsContainer}>
        <PassengerDetails />
      </View>
      <View style={styles.goNextButtonContainer}>
        <GoNextButton onPress={goToNextPage}>Go to Wallet</GoNextButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  detailsContainer: {
    borderRadius: 20,
    marginTop: 30,
    padding: 20,
    backgroundColor: "white",
  },

  goNextButtonContainer: {
    marginVertical: 30,
  },
});
