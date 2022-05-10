import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

import theme from "./src/styles/theme";

import { Home } from "./src/screens/Home";
import { RFValue } from "react-native-responsive-fontsize";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  let customFonts = {
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.COLORS.DARKER,
          paddingHorizontal: 16,
          paddingTop: RFValue(75),
        }}
        onLayout={onLayoutRootView}
      >
        <StatusBar style="auto" />
        <Home />
      </View>
    </ThemeProvider>
  );
}
