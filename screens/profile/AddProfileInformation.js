import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { getData } from "../../store/asyncStorage/asyncStorage";
import ProfileDetails from "../../components/Profile/ProfileDetails";

export default function AddProfileInformation() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    getProfileData();
  });

  async function getProfileData() {
    const profileData = await getData("profile");
    setTimeout(() => {
      if (profileData === null) {
        navigation.setOptions({
          headerLeft: null,
          headerTitle: "Profile informations",
          headerShown: true,
        });
        setLoading(false);
      } else {
        navigation.navigate("HomeStack");
      }
    }, 1000);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="lg" color="#0000ff" />
        </View>
      ) : (
        <ProfileDetails />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
