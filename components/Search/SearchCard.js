import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import HorizontalLineWithIcon from "../HorizontalLineWithIcon";
import { useNavigation } from "@react-navigation/native";
import GoNextButton from "../GoNextButton";
import { HEIGHT } from "../../constants/constants";
import { getFormatedActualDate } from "../../helpers/helpers";
import { getData } from "../../store/asyncStorage/asyncStorage";
import { useDispatch, useSelector } from "react-redux";
import { getAirportByCode } from "../../store/redux/airports";

export default function SearchCard() {
  const [profileData, setProfileData] = useState(null);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    getProfileData();
    dispatch(getAirportByCode({ code: profileData?.airport, type: "airport" }));
  }, []);

  async function getProfileData() {
    const profileData = await getData("profile");
    setProfileData(JSON.parse(profileData));
  }

  const airportdata = useSelector((state) => state.airportData.selectedAirport);

  function GoToSearchResults() {
    navigation.navigate("SearchResult", {
      destinationAirport: "MAL",
      cheapest: 120,
      premium: 1356,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          buttonStyle={styles.oneWayButton}
          buttonText={styles.oneWayButtonText}
        >
          One-way
        </Button>
        <Button
          buttonStyle={styles.roundTripButton}
          buttonText={styles.roundTripButtonText}
        >
          Round Trip
        </Button>
      </View>
      <View style={styles.inputsContainer}>
        <Input label="From" text={airportdata?.label} />
        <HorizontalLineWithIcon
          iconProperties={{
            name: "compare-arrows",
            size: HEIGHT * 0.045,
            color: "#7b7b7b",
          }}
        />
        <Input label="To" text="Mallorca" />
        <Input
          label="Date"
          text={getFormatedActualDate()}
          addRight="true"
          rightIconProperties={{
            name: "calendar",
            size: HEIGHT * 0.023,
            color: "#e2dfdf",
          }}
        />
        <View>
          <Input
            label="Passengers"
            text="2 adults"
            addRight="true"
            rightIconProperties={{
              name: "plus",
              size: 14,
              color: "#7b7b7b",
            }}
            addLeft="true"
            leftIconProperties={{
              name: "minus",
              size: 14,
              color: "#7b7b7b",
            }}
            IconContainerStyle={styles.IconContainer}
          />
        </View>
        <GoNextButton onPress={GoToSearchResults}>See 83 flights</GoNextButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    marginHorizontal: HEIGHT * 0.04,
    marginTop: HEIGHT * 0.04,
    padding: HEIGHT * 0.033,
  },

  buttonsContainer: {
    flexDirection: "row",
  },

  oneWayButton: {
    backgroundColor: "#009688",
    padding: 8,
    borderRadius: 10,
  },

  oneWayButtonText: {
    color: "white",
    fontSize: HEIGHT * 0.016,
    fontWeight: "700",
  },

  roundTripButton: {
    padding: 7,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#e5e3e3",
    marginLeft: 10,
  },

  roundTripButtonText: {
    color: "#7b7b7b",
    fontSize: HEIGHT * 0.0162,
    fontWeight: "700",
  },

  inputsContainer: {
    marginTop: HEIGHT * 0.032,
  },

  IconContainer: {
    width: HEIGHT * 0.031,
    height: HEIGHT * 0.031,
    marginRight: 10,
    backgroundColor: "#f5f4f4",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
