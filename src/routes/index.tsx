import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { LibraryScreen } from "../screens/LibraryScreen";
import { ArtistScreen } from "../screens/ArtistScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigatorHome() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ArtistScreen" component={ArtistScreen} />
    </Stack.Navigator>
  );
}

export function Routes() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarActiveTintColor: theme.COLORS.LIGHTER,
        tabBarInactiveTintColor: theme.COLORS.GREY,
        tabBarStyle: {
          backgroundColor: theme.COLORS.DARKER,
          height: 56,
          paddingTop: 8,
          paddingBottom: 8,
          paddingHorizontal: 25,
          borderTopColor: theme.COLORS.DARK,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreem"
        component={StackNavigatorHome}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: "Buscar",
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          tabBarLabel: "Sua Biblioteca",
          tabBarIcon: ({ size, color }) => (
            <Feather name="bar-chart-2" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
