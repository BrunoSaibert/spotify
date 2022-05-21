import { StackScreenProps } from "@react-navigation/stack";

type NavigationParamList = {
  HomeScreem: undefined;
  SearchScreen: undefined;
  LibraryScreen: undefined;
  ArtistScreen: undefined;
};

export type NavigationScreenProps<T extends keyof NavigationParamList> =
  StackScreenProps<NavigationParamList, T>;
