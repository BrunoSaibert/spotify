import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { HomeScreen } from "../screens/HomeScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { LibraryScreen } from "../screens/LibraryScreen";
import { ArtistScreen } from "../screens/ArtistScreen";
import { PlaylistScreen } from "../screens/PlaylistScreen";

const Tab = createBottomTabNavigator();

function createCommon(Stack: any) {
  return (
    <>
      <Stack.Screen name="ArtistScreen" component={ArtistScreen} />
      <Stack.Screen name="PlaylistScreen" component={PlaylistScreen} />
    </>
  );
}

function StackHomeNavigator() {
  const Stack = createStackNavigator();
  const common = createCommon(Stack);

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {common}
    </Stack.Navigator>
  );
}

function StackSearchNavigator() {
  const Stack = createStackNavigator();
  const common = createCommon(Stack);

  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      {common}
    </Stack.Navigator>
  );
}

function StackLibraryNavigator() {
  const Stack = createStackNavigator();
  const common = createCommon(Stack);

  return (
    <Stack.Navigator
      initialRouteName="LibraryScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
      {common}
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
          position: "absolute",
          paddingBottom: getBottomSpace() + 8,
          paddingHorizontal: 25,
          borderTopWidth: 0,
          elevation: 0,
          height: getBottomSpace() + 50,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["transparent", "#000"]}
            start={[0, 0]}
            end={[0, 1]}
            style={{
              width: "100%",
              height: getBottomSpace() + 150,
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
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={StackSearchNavigator}
        options={{
          tabBarLabel: "Buscar",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "tag-search" : "tag-search-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LibraryTab"
        component={StackLibraryNavigator}
        options={{
          tabBarLabel: "Sua Biblioteca",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={
                focused ? "music-box-multiple" : "music-box-multiple-outline"
              }
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
