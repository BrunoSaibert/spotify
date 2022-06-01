import React from "react";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { ButtonIcon } from "../../components/ButtonIcon";
import { RecentList } from "../../components/RecentList";
import { Slider } from "../../components/Slider";
import {
  DATA_FOR_ME,
  DATA_PODCAST,
  DATA_RECENTS,
  DATA_THE_BEST_ARTIST,
} from "../../utils/database";

import * as S from "./styles";

import { NavigationScreenProps } from "../../navigation/types";

export function HomeScreen(props: NavigationScreenProps<"HomeScreem">) {
  const { navigation } = props;

  function handleNavigation() {
    navigation.navigate("ArtistScreen");
  }

  const date = new Date();
  const hour = date.getHours();
  let title = "";

  if (hour > 6 && hour < 12) {
    title = "Bom dia";
  } else if (hour < 18) {
    title = "Boa tarde";
  } else {
    title = "Boa noite";
  }

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: getBottomSpace() + 144 }}
    >
      <LinearGradient
        colors={[DATA_RECENTS[0].bgColor, "transparent"]}
        start={[0, 0]}
        end={[0.12, 0.6]}
      >
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>

          <S.ButtonWrapper>
            <ButtonIcon name="bell-outline" color="LIGHTER" />
            <ButtonIcon name="progress-clock" color="LIGHTER" />
            <ButtonIcon
              name="cog-outline"
              color="LIGHTER"
              style={{ marginRight: -12 }}
              onPress={handleNavigation}
            />
          </S.ButtonWrapper>
        </S.TitleWrapper>

        <RecentList data={DATA_RECENTS} />
      </LinearGradient>

      <Slider title="Seus programas" data={DATA_PODCAST} />
      <Slider title="Tocadas recentemente" data={DATA_RECENTS} size="small" />
      <Slider
        title="Com base no que você ouviu recentemente"
        data={DATA_FOR_ME}
      />
      <Slider title="O melhor de cada artista" data={DATA_THE_BEST_ARTIST} />
      <Slider title="100% você" data={DATA_RECENTS} />
    </ScrollView>
  );
}
