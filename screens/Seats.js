import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import SeatsLegend from "../components/Seats/SeatsLegend";
import Card from "../components/Seats/Card";
import GoNextButton from "../components/GoNextButton";
import { HEIGHT } from "../constants/constants";

export default function Seats() {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  function goToNextPage() {
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

      headerRight: () => {
        return (
          <TouchableOpacity style={{ marginRight: 15 }} onPress={goToNextPage}>
            <Text style={{ color: "#7b7b7b" }}>Skip</Text>
          </TouchableOpacity>
        );
      },
    });
  });

  return (
    <View style={styles.container}>
      <SeatsLegend />
      <View style={styles.cardContainer}>
        <Card />
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
