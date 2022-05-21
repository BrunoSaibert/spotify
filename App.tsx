import "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

import theme from "./src/styles/theme";

import { Routes } from "./src/routes";
import { PlayerHandle } from "./src/components/PlayerHandle";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  let customFonts = {
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  };

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(customFonts);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
        }}
        onLayout={onLayoutRootView}
      >
        <NavigationContainer
          theme={{
            colors: {
              background: theme.COLORS.DARKER,
            },
          }}
        >
          <PlayerHandle>
            <Routes />
          </PlayerHandle>
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}
