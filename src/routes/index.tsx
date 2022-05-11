import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { Home } from "../screens/Home";
import { Buscar } from "../screens/Buscar";

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
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sua Biblioteca"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="bar-chart-2" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
