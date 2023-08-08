import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";

export default function CountriesView() {
  function DisplayItem({ item }) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/london.jpeg")}
          style={styles.image}
        />
        <Text style={styles.city}>London </Text>
      </View>
    );
  }

  const zm = [1, 2, 3, 4];

  return (
    <FlatList
      data={zm}
      keyExtractor={(item) => item}
      renderItem={(item) => <DisplayItem item={item} />}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    alignItems: "center",
  },
  image: {
    width: 166,
    height: 126,
    borderRadius: 20,
  },

  city: {
    marginTop: 10,
    textAlign: "center",
    color: "#222222",
    fontWeight: "600",
  },
});
