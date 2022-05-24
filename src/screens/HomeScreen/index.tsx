import React from "react";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

import { ButtonIcon } from "../../components/ButtonIcon";
import { RecentList } from "../../components/RecentList";
import { Slider } from "../../components/Slider";
import {
  DATA_ARTISTAS,
  DATA_PODCAST,
  DATA_RECENTES,
} from "../../utils/database";

import * as S from "./styles";

import { NavigationScreenProps } from "../../navigation/types";

export function HomeScreen(props: NavigationScreenProps<"HomeScreem">) {
  const { navigation } = props;

  const theme = useTheme();

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
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 135 }}
    >
      <LinearGradient
        colors={[theme.COLORS.PRIMARY, "transparent"]}
        start={[0, 0]}
        end={[0.12, 0.6]}
      >
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>

          <S.ButtonWrapper>
            <ButtonIcon name="bell" color="LIGHTER" />
            <ButtonIcon name="clock" color="LIGHTER" />
            <ButtonIcon
              name="cog"
              color="LIGHTER"
              style={{ marginRight: -12 }}
              onPress={handleNavigation}
            />
          </S.ButtonWrapper>
        </S.TitleWrapper>

        <RecentList data={DATA_RECENTES} />
      </LinearGradient>

      <Slider title="Seus programas" data={DATA_PODCAST} />
      <Slider title="Tocadas recentemente" data={DATA_RECENTES} size="small" />
      <Slider title="Principais artistas" data={DATA_ARTISTAS} />
      <Slider title="100% você" data={DATA_RECENTES} />
    </ScrollView>
  );
}
