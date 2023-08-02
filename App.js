import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Start from "./screens/Start";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Wallet from "./screens/Wallet";
import Profile from "./screens/Profile";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          let iconName;
          let color;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            color = focused ? "black" : "grey";
          }
          if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
            color = focused ? "black" : "grey";
          }
          if (route.name === "Wallet") {
            iconName = focused ? "wallet" : "wallet-outline";
            color = focused ? "black" : "grey";
          }
          if (route.name === "Profile") {
            iconName = focused ? "people-sharp" : "ios-people-outline";
            color = focused ? "black" : "grey";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Wallet" component={Wallet} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
}

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="HomeStack" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
}

export default function App() {
  useFonts({
    "Legend-Normal": require("./assets/fonts/Legend.ttf"),
    "Legend-Bold": require("./assets/fonts/Legend-Bold.ttf"),
  });

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
