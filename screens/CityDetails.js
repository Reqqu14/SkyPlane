import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { getCityById } from "../store/redux/cities";
import GoNextButton from "../components/GoNextButton";

export default function CityDetails({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { cityId } = route.params;

  function goBack() {
    navigation.goBack();
  }

  function goToNextPage() {
    navigation.navigate("SearchResult", { airport: selectedCity.Airport });
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
      headerTitle: "City details",
    });
  });

  useEffect(() => {
    dispatch(getCityById({ Id: cityId }));
  }, [dispatch, cityId]);

  const selectedCity = useSelector((state) => state.cityData.selectedCity);

  return selectedCity != null ? (
    <View style={styles.container}>
      <Image source={selectedCity.Image} style={styles.image}></Image>
      <View style={styles.detailsContainer}>
        <Text style={styles.cityName}>{selectedCity.Name}</Text>
        <View style={styles.detailRowContainer}>
          <View style={styles.detail}>
            <Text style={styles.detailHeader}>Country</Text>
            <Text style={styles.details}>{selectedCity.Country}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailHeader}>Population</Text>
            <Text style={styles.details}>{selectedCity.Population}</Text>
          </View>
        </View>
        <View style={styles.detailRowContainer}>
          <View style={styles.detail}>
            <Text style={styles.detailHeader}>Airport</Text>
            <Text style={styles.details}>{selectedCity.AirportFullName}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailHeader}>City distance</Text>
            <Text style={styles.details}>{selectedCity.CityDistance}</Text>
          </View>
        </View>
        <View style={styles.detailRowContainer}>
          <View style={styles.detail}>
            <Text style={styles.detailHeader}>From</Text>
            <Text style={styles.details}>{selectedCity.From}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailHeader}>To</Text>
            <Text style={styles.details}>{selectedCity.To}</Text>
          </View>
        </View>
      </View>
      <GoNextButton onPress={goToNextPage}>See flights</GoNextButton>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
  },

  image: {
    width: "100%",
    height: "45%",
    borderRadius: 20,
  },

  cityName: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 15,
  },

  detailsContainer: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    marginTop: 20,
    borderRadius: 20,
  },

  detail: {
    flex: 1,
    alignItems: "center",
  },

  detailRowContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },

  detailHeader: {
    fontSize: 13,
    color: "#7b7b7b",
  },

  details: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
});
