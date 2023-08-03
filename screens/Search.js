import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Topic from "../components/Search/Topic";
import SearchCard from "../components/Search/SearchCard";

export default function Search() {
  return (
    <View>
      <Topic />
      <SearchCard />
    </View>
  );
}

const styles = StyleSheet.create({});
