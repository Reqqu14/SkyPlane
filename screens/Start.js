import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { HEIGHT, WIDTH } from "../constants/constants";

export default function Start() {
  const navigation = useNavigation();

  function StartButtonPressed() {
    //navigation.navigate("HomeStack");
    navigation.navigate("AddProfileInformations");
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/plane.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>
        <Text style={styles.titleDiscriminant}>Sky</Text>Plane
      </Text>
      <Text style={styles.slogan}>Fly anywhere.</Text>
      <View style={styles.button}>
        <Button
          onPress={StartButtonPressed}
          buttonStyle={styles.buttonCustomStyle}
          buttonText={styles.customButtonText}
        >
          Start your journey
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: HEIGHT < 650 ? 0.7 * WIDTH : 0.85 * WIDTH,
    height: 0.55 * HEIGHT,
  },

  title: {
    fontSize: HEIGHT * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 0.07 * HEIGHT,
    letterSpacing: 2,
  },

  titleDiscriminant: {
    color: "#009688",
  },

  slogan: {
    textAlign: "center",
    marginTop: 0.03 * HEIGHT,
    fontSize: 18,
  },

  button: {
    marginTop: 0.05 * HEIGHT,
  },

  buttonCustomStyle: {
    backgroundColor: "#009688",
    padding: HEIGHT * 0.022,
    borderRadius: 60,
    marginHorizontal: HEIGHT * 0.05,
  },

  customButtonText: {
    fontWeight: "500",
    color: "white",
    fontSize: 16,
  },
});
