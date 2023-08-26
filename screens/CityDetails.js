import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { getCityById } from "../store/redux/cities";
import GoNextButton from "../components/GoNextButton";
import { HEIGHT } from "../constants/constants";
import { getData } from "../store/asyncStorage/asyncStorage";
import { ScrollView } from "react-native-gesture-handler";

export default function CityDetails({ route }) {
  const [profileData, setProfileData] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { cityId } = route.params;

  useEffect(() => {
    getProfileData();
  }, []);

  async function getProfileData() {
    const profileData = await getData("profile");
    setProfileData(JSON.parse(profileData));
  }

  function goBack() {
    navigation.goBack();
  }

  function goToNextPage() {
    if (profileData.airport === selectedCity.Airport) {
      Alert.alert(
        "Destination error",
        "You cannot flight from Your selected airport, change destination or default airport"
      );
      return;
    }
    navigation.navigate("SearchResult", {
      destinationAirport: selectedCity.Airport,
      cheapest: selectedCity.From,
      premium: selectedCity.To,
    });
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
      headerTitle: "City details",
    });
  });

  useEffect(() => {
    dispatch(getCityById({ Id: cityId }));
  }, [dispatch, cityId]);

  const selectedCity = useSelector((state) => state.cityData.selectedCity);

  return selectedCity != null ? (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text style={styles.details}>{selectedCity.From} $</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.detailHeader}>To</Text>
              <Text style={styles.details}>{selectedCity.To} $</Text>
            </View>
          </View>
        </View>
        <GoNextButton onPress={goToNextPage}>See flights</GoNextButton>
      </ScrollView>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    marginTop: HEIGHT * 0.013,
    paddingHorizontal: HEIGHT * 0.026,
  },

  image: {
    width: "100%",
    height: HEIGHT * 0.4,
    borderRadius: 20,
  },

  cityName: {
    fontSize: HEIGHT * 0.03,
    fontWeight: "600",
    marginBottom: HEIGHT * 0.02,
  },

  detailsContainer: {
    alignItems: "center",
    backgroundColor: "white",
    padding: HEIGHT * 0.02,
    marginTop: HEIGHT * 0.026,
    borderRadius: 20,
  },

  detail: {
    flex: 1,
    alignItems: "center",
  },

  detailRowContainer: {
    flexDirection: "row",
    marginBottom: HEIGHT * 0.013,
  },

  detailHeader: {
    fontSize: HEIGHT * 0.017,
    color: "#7b7b7b",
  },

  details: {
    fontSize: HEIGHT * 0.021,
    fontWeight: "600",
    marginTop: 5,
  },
});
