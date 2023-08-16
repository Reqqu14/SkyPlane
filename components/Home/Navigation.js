import { StyleSheet, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CountriesView from "./CountriesView";

const TopNavigation = createMaterialTopTabNavigator();

function TopBarNavigation() {
  return (
    <TopNavigation.Navigator
      screenOptions={{
        tabBarStyle: {
          borderRadius: 60,
          marginTop: 40,
          backgroundColor: "#f4f4f4",
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontWeight: "600",
          textTransform: "capitalize",
          marginHorizontal: 0,
          fontSize: 15,
        },
        tabBarItemStyle: {
          paddingHorizontal: 0,
        },

        tabBarIndicatorStyle: {
          backgroundColor: "#009688",
          height: 3,
        },

        tabBarIndicatorContainerStyle: {
          marginLeft: 15,
          paddingHorizontal: 50,
        },

        tabBarActiveTintColor: "#009688",
        tabBarInactiveTintColor: "#7b7b7b",
      }}
    >
      <TopNavigation.Screen name="All" component={CountriesView} />
      <TopNavigation.Screen
        name="Europe"
        component={CountriesView}
        initialParams={{ continent: "Europe" }}
      />
      <TopNavigation.Screen
        name="America"
        component={CountriesView}
        initialParams={{ continent: "America" }}
      />
      <TopNavigation.Screen
        name="Asia"
        component={CountriesView}
        initialParams={{ continent: "Asia" }}
      />
    </TopNavigation.Navigator>
  );
}

export default function Navigation() {
  return <TopBarNavigation />;
}

const styles = StyleSheet.create({});
