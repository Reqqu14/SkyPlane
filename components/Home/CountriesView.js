import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { HEIGHT, WIDTH } from "../../constants/constants";

export default function CountriesView({ route }) {
  const cities = useSelector((state) => {
    return state.cityData.cities;
  });

  const navigation = useNavigation();

  function goToCityDetails(id) {
    navigation.navigate("CityDetails", { cityId: id });
  }

  const continent = route.params?.continent;

  function DisplayItem({ city }) {
    return continent == city.Continent || continent == undefined ? (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => goToCityDetails(city.Id)}>
          <Image source={city.Image} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.city}>{city.Name}</Text>
      </View>
    ) : null;
  }

  return (
    <FlatList
      data={cities}
      keyExtractor={(city) => city.Id}
      renderItem={(city) => <DisplayItem city={city.item} />}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEIGHT * 0.045,
    alignItems: "center",
    marginBottom: HEIGHT * 0.02,
  },
  image: {
    width: WIDTH * 0.435,
    height: HEIGHT * 0.163,
    borderRadius: 20,
  },

  city: {
    fontSize: HEIGHT * 0.02,
    marginTop: 10,
    textAlign: "center",
    color: "#222222",
    fontWeight: "600",
  },
});
