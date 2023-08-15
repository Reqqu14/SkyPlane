import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Topic from "../../components/ReusableScreenComponents/Topic";
import SearchCard from "../../components/Search/SearchCard";

export default function Search() {
  return (
    <View>
      <Topic>Search for flight</Topic>
      <SearchCard />
    </View>
  );
}

const styles = StyleSheet.create({});
