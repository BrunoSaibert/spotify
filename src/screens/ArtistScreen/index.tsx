import React, { useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import bandImage from "../../assets/images/bg-portugal-the-man.jpg";
import PlayShuffleSvg from "../../assets/PlayShuffle.svg";

import { ButtonIcon } from "../../components/ButtonIcon";
import { DiscographyItem } from "../../components/DiscographyItem";
import { MostListenedItem } from "../../components/MostListenedItem";

import { DATA_DISCOGRAPHY, DATA_MOST_LISTENED } from "../../utils/database";

import * as S from "./styles";

import { NavigationScreenProps } from "../../navigation/types";

export function ArtistScreen(props: NavigationScreenProps<"ArtistScreen">) {
  const { navigation } = props;

  const [scrollY, _] = useState(new Animated.Value(0));
  const theme = useTheme();

  const artistName = "Portugal. The Man";

  function handleNavigation() {
    navigation.goBack();
  }

  return (
    <>
      <S.Wrapper
        colors={["#444", theme.COLORS.DARKER]}
        start={[0, 0]}
        end={[0, 1]}
      >
        <Animated.View
          style={{
            width: "100%",
            zIndex: 90,

            backgroundColor: scrollY.interpolate({
              inputRange: [0, 120, 150],
              outputRange: ["transparent", "transparent", "#5C6061"],
              extrapolate: "clamp",
            }),

            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          <S.AnimatedHeader>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Animated.View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,

                  alignItems: "center",
                  justifyContent: "center",

                  backgroundColor: scrollY.interpolate({
                    inputRange: [0, 170, 230],
                    outputRange: [
                      `${theme.COLORS.DARK}99`,
                      `${theme.COLORS.DARK}99`,
                      "transparent",
                    ],
                    extrapolate: "clamp",
                  }),

                  left: scrollY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [10, 0],
                    extrapolate: "clamp",
                  }),
                }}
              >
                <TouchableOpacity onPress={handleNavigation}>
                  <S.AnimatedHeaderIcon name="arrow-left" />
                </TouchableOpacity>
              </Animated.View>

              <Animated.Text
                style={{
                  marginLeft: 20,
                  opacity: scrollY.interpolate({
                    inputRange: [0, 160, 180],
                    outputRange: [0, 0, 1],
                    extrapolate: "clamp",
                  }),
                }}
              >
                <S.AnimatedHeaderTitle>{artistName}</S.AnimatedHeaderTitle>
              </Animated.Text>
            </View>

            <Animated.View
              style={{
                top: scrollY.interpolate({
                  inputRange: [0, 265],
                  outputRange: [295, 30],
                  extrapolate: "clamp",
                }),
              }}
            >
              <PlayShuffleSvg />
            </Animated.View>
          </S.AnimatedHeader>
        </Animated.View>

        <Animated.View
          style={{
            opacity: scrollY.interpolate({
              inputRange: [0, 150],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
          }}
        >
          <S.ImageBackground source={bandImage} />
        </Animated.View>

        <S.ScrollContainer
          bounces={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollY },
                },
              },
            ],
            { useNativeDriver: false }
          )}
          showsVerticalScrollIndicator={false}
        >
          <S.Header>
            <S.HeaderTitle>{artistName}</S.HeaderTitle>
          </S.Header>

          <S.Container style={{ paddingBottom: 135 }}>
            <S.Listeners>17.487.916 ouvintes mensais</S.Listeners>

            <S.Actions>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <S.ButtonFollow>
                  <S.ButtonFollowText>Seguir</S.ButtonFollowText>
                </S.ButtonFollow>

                <ButtonIcon name="dots-vertical" />
              </View>
            </S.Actions>

            <S.LikedSongs>
              <View style={{ position: "relative" }}>
                <S.LikedSongsImage source={bandImage} />
                <View
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 22,
                    position: "absolute",
                    bottom: -4,
                    right: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: `${theme.COLORS.PRIMARY}`,
                    borderWidth: 2,
                    borderColor: `${theme.COLORS.DARKER}`,
                  }}
                >
                  <MaterialCommunityIcons name="heart" color="white" />
                </View>
              </View>
              <View>
                <S.LikedSongsTitle>Músicas Curtidas</S.LikedSongsTitle>
                <S.LikedSongsArtist>
                  10 músicas de {artistName}
                </S.LikedSongsArtist>
              </View>
            </S.LikedSongs>

            <S.Section>
              <S.SectionTitle>Popular</S.SectionTitle>
              {DATA_MOST_LISTENED.map((item, index) => (
                <MostListenedItem
                  key={index}
                  position={index + 1}
                  data={item}
                />
              ))}
            </S.Section>

            <S.Section>
              <S.SectionTitle>Lancamentos populares</S.SectionTitle>

              {DATA_DISCOGRAPHY.map((item, index) => (
                <DiscographyItem key={index} data={item} />
              ))}
            </S.Section>
          </S.Container>
        </S.ScrollContainer>
      </S.Wrapper>
    </>
  );
}
