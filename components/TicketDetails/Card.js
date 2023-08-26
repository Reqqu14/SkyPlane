import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { HEIGHT } from "../../constants/constants";
import { formatDate } from "../../helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { getAirportByCode } from "../../store/redux/airports";
import { getData } from "../../store/asyncStorage/asyncStorage";

export default function Card({ airport, destination, seat, date }) {
  const [formattedDate, setFormattedDate] = useState();
  const [profileData, setProfileData] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setFormattedDate(formatDate(date));
    getProfileData();
  }, []);

  useEffect(() => {
    dispatch(getAirportByCode({ code: airport, type: "airport" }));
    dispatch(
      getAirportByCode({ code: destination, type: "destinationAirport" })
    );
  }, []);

  const airportdata = useSelector((state) => state.airportData.selectedAirport);
  const destinationAirportData = useSelector(
    (state) => state.airportData.destinationAirport
  );

  async function getProfileData() {
    const profileData = await getData("profile");
    setProfileData(JSON.parse(profileData));
  }

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={{ flex: 3 }}>
          <View>
            <Text style={[styles.topic, { color: "#ffc125" }]}>Tomasz</Text>
          </View>
          <View>
            <Text style={[styles.topic, { color: "#222222" }]}>Airlines</Text>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.header}>Flight</Text>
          <Text style={styles.headerText}>UT 111</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>Gate</Text>
          <Text style={styles.headerText}>A24</Text>
        </View>
      </View>
      <View>
        <View style={styles.destinationContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>{airportdata?.label}</Text>
            <Text style={styles.headerText}>{airport}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>{destinationAirportData?.label}</Text>
            <Text style={styles.headerText}>{destination}</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Passenger</Text>
            <Text style={styles.headerText}>
              {profileData?.name} {profileData?.surname}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.header}>Seat</Text>
            <Text style={styles.headerText}>{seat}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Date</Text>
            <Text style={styles.headerText}>{formattedDate}</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Boarding</Text>
            <Text style={styles.headerText}>12:40</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>Departure</Text>
            <Text style={styles.headerText}>13:10</Text>
          </View>
        </View>
      </View>
      <View style={styles.barcodeContainer}>
        <Image
          source={require("../../assets/images/barcode.png")}
          style={styles.barcode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topic: {
    fontSize: HEIGHT * 0.026,
    fontWeight: "500",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  destinationContainer: {
    flexDirection: "row",
    marginVertical: HEIGHT * 0.032,
  },

  detailsContainer: {
    flexDirection: "row",
    marginVertical: HEIGHT * 0.019,
  },

  header: {
    color: "#7b7b7b",
    fontSize: HEIGHT * 0.018,
    fontWeight: "600",
  },

  headerText: {
    color: "#222222",
    fontSize: HEIGHT * 0.021,
    fontWeight: "600",
  },

  barcodeContainer: {
    alignItems: "center",
    marginVertical: HEIGHT * 0.013,
    marginTop: HEIGHT * 0.065,
  },

  barcode: {
    width: "100%",
  },
});
