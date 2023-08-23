import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import Search from "./SearchScreens/Search";
import Navigation from "../components/Home/Navigation";
import SearchBar from "../components/Home/SearchBar";
import { HEIGHT } from "../constants/constants";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: HEIGHT * 0.065,
    paddingHorizontal: HEIGHT * 0.02,
    flex: 1,
  },
});
