import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { LibraryScreen } from "../screens/LibraryScreen";

const Tab = createBottomTabNavigator();

export function Routes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
        name="Início"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sua Biblioteca"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="bar-chart-2" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
