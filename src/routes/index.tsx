import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { LibraryScreen } from "../screens/LibraryScreen";
import { ArtistScreen } from "../screens/ArtistScreen";

const Tab = createBottomTabNavigator();
const StackHome = createStackNavigator();
const StackSearch = createStackNavigator();
const StackLibrary = createStackNavigator();

function StackHomeNavigator() {
  return (
    <StackHome.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <StackHome.Screen name="HomeScreen" component={HomeScreen} />
      <StackHome.Screen name="ArtistScreen" component={ArtistScreen} />
    </StackHome.Navigator>
  );
}

function StackSearchNavigator() {
  return (
    <StackSearch.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{ headerShown: false }}
    >
      <StackSearch.Screen name="SearchScreen" component={SearchScreen} />
      <StackSearch.Screen name="ArtistScreen" component={ArtistScreen} />
    </StackSearch.Navigator>
  );
}

function StackLibraryNavigator() {
  return (
    <StackLibrary.Navigator
      initialRouteName="LibraryScreen"
      screenOptions={{ headerShown: false }}
    >
      <StackLibrary.Screen name="LibraryScreen" component={LibraryScreen} />
      <StackLibrary.Screen name="ArtistScreen" component={ArtistScreen} />
    </StackLibrary.Navigator>
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
          position: "absolute",
          paddingBottom: 8,
          paddingHorizontal: 25,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["transparent", theme.COLORS.DARKER]}
            start={[0, 0]}
            end={[0, 1]}
            style={{
              width: "100%",
              height: 150,
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackHomeNavigator}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={StackSearchNavigator}
        options={{
          tabBarLabel: "Buscar",
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LibraryTab"
        component={StackLibraryNavigator}
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
