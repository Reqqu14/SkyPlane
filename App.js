import { StyleSheet, Text, View } from "react-native";
import Start from "./screens/Start";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Search from "./screens/SearchScreens/Search";
import Wallet from "./screens/Wallet";
import Profile from "./screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import SearchResult from "./screens/SearchScreens/SearchResult";
import FilghtDetails from "./screens/FilghtDetails";
import Seats from "./screens/Seats";
import PurchaseOverview from "./screens/PurchaseOverview";
import TickedDetails from "./screens/TickedDetails";
import CityDetails from "./screens/CityDetails";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

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
        headerTintColor: "#7b7b7b",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#f3f2f2" },
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="HomeStack" component={BottomTabNavigation} />
      <Stack.Screen
        name="CityDetails"
        component={CityDetails}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="FlightDetails"
        component={FilghtDetails}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Seats"
        component={Seats}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="PurchaseOverview"
        component={PurchaseOverview}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="TicketDetails"
        component={TickedDetails}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  useFonts({
    "Legend-Normal": require("./assets/fonts/Legend.ttf"),
    "Legend-Bold": require("./assets/fonts/Legend-Bold.ttf"),
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
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
