import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import Topic from "../../components/ReusableScreenComponents/Topic";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import { getData } from "../../store/asyncStorage/asyncStorage";
import { HEIGHT } from "../../constants/constants";

export default function Profile() {
  const [profileData, setProfileData] = useState(null);
  const isFocused = useIsFocused();
  useEffect(() => {
    getProfileData();
  }, [isFocused]);

  async function getProfileData() {
    const profileData = await getData("profile");
    setProfileData(JSON.parse(profileData));
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Topic>Profile</Topic>
      <View style={styles.profileDataContainer}>
        <ProfileDetails profileData={profileData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileDataContainer: {
    marginTop: HEIGHT * 0.026,
    marginBottom: 60,
  },
});
