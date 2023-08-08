import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import Search from "./SearchScreens/Search";
import Navigation from "../components/Home/Navigation";
import SearchBar from "../components/Home/SearchBar";

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
    marginTop: 50,
    paddingHorizontal: 15,
    flex: 1,
  },
});
