import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Start() {
  const navigation = useNavigation();

  function StartButtonPressed() {
    navigation.navigate("HomeStack");
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
    width: 0.85 * width,
    height: 0.55 * height,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 0.07 * height,
    letterSpacing: 2,
  },

  titleDiscriminant: {
    color: "#009688",
  },

  slogan: {
    textAlign: "center",
    marginTop: 0.03 * height,
    fontSize: 18,
  },

  button: {
    marginTop: 0.05 * height,
  },

  buttonCustomStyle: {
    backgroundColor: "#009688",
    padding: 20,
    borderRadius: 60,
    marginHorizontal: 25,
  },

  customButtonText: {
    fontWeight: "500",
    color: "white",
    fontSize: 16,
  },
});
