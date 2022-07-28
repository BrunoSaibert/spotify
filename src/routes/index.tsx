import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";

import theme from "../styles/theme";
import { SignIn } from "../screens/SignIn";
import { PlayerHandle } from "../components/PlayerHandle";

export function Routes() {
  const user = true;

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: theme.COLORS.DARKER,
        },
      }}
    >
      {user ? (
        <PlayerHandle>
          <AppRoutes />
        </PlayerHandle>
      ) : (
        <SignIn />
      )}
    </NavigationContainer>
  );
}
