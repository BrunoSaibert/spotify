import React, { useState } from "react";
import { Animated, Platform, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { LinearGradient } from "expo-linear-gradient";

import PlayShuffleSvg from "../../assets/PlayShuffle.svg";

import { ButtonIcon } from "../../components/ButtonIcon";
import { DiscographyItem } from "../../components/DiscographyItem";
import { MostListenedItem } from "../../components/MostListenedItem";
import { Slider } from "../../components/Slider";

import { DATA_ARTISTS } from "../../utils/database";
import { formatCommaSeparator } from "../../utils/utils";

import * as S from "./styles";

import { NavigationScreenProps } from "../../navigation/types";

export function ArtistScreen(props: NavigationScreenProps<"ArtistScreen">) {
  const { navigation } = props;

  const [scrollY, _] = useState(new Animated.Value(0));
  const theme = useTheme();

  function handleNavigation() {
    navigation.goBack();
  }

  const artistPosition = 9;

  const data = {
    title: DATA_ARTISTS[artistPosition].title,
    bgColor: DATA_ARTISTS[artistPosition].bgColor,
    description: DATA_ARTISTS[artistPosition].description,
    image: DATA_ARTISTS[artistPosition].imageUrl,
    discography: DATA_ARTISTS[artistPosition].albuns,
    mostListened: DATA_ARTISTS[artistPosition].mostListened,
    monthlyListeners: DATA_ARTISTS[artistPosition].monthlyListeners,
    likedSongs: DATA_ARTISTS[artistPosition].likedSongs,
    appearsIn: DATA_ARTISTS[artistPosition].appearsIn,
  };

  return (
    <>
      <S.Wrapper
        colors={[data.bgColor, theme.COLORS.DARKER]}
        start={[0, 0]}
        end={[0, 1]}
      >
        <Animated.View
          style={{
            width: "100%",
            zIndex: 90,

            backgroundColor: scrollY.interpolate({
              inputRange: [0, 120, 150],
              outputRange: ["transparent", "transparent", data.bgColor],
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
                <S.AnimatedHeaderTitle>{data.title}</S.AnimatedHeaderTitle>
              </Animated.Text>
            </View>

            <Animated.View
              style={{
                top: scrollY.interpolate({
                  inputRange: [0, 265],
                  outputRange: [
                    getStatusBarHeight() + (Platform.OS === "ios" ? 260 : 245),
                    getStatusBarHeight() + (Platform.OS === "ios" ? 15 : 0),
                  ],
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
          <S.ImageBackground
            source={data.image}
            imageStyle={{
              resizeMode: "cover",
            }}
          />
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
            <S.HeaderTitle>{data.title}</S.HeaderTitle>
          </S.Header>

          <S.Container style={{ paddingBottom: getBottomSpace() + 144 }}>
            <S.Listeners>
              {formatCommaSeparator(data.monthlyListeners)} ouvintes mensais
            </S.Listeners>

            <S.Actions>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <S.ButtonFollow>
                  <S.ButtonFollowText>Seguir</S.ButtonFollowText>
                </S.ButtonFollow>

                <ButtonIcon name="dots-vertical" />
              </View>
            </S.Actions>

            {data.likedSongs > 0 && (
              <S.LikedSongs>
                <View style={{ position: "relative" }}>
                  <S.LikedSongsImage source={data.image} />
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
                    {data.likedSongs} músicas de {data.title}
                  </S.LikedSongsArtist>
                </View>
              </S.LikedSongs>
            )}

            <S.Section>
              <S.SectionTitle>Popular</S.SectionTitle>
              {data.mostListened.map((item, index) => (
                <MostListenedItem
                  key={index}
                  position={index + 1}
                  imageUrl={
                    DATA_ARTISTS[artistPosition].albuns[item.album].imageUrl
                  }
                  title={
                    DATA_ARTISTS[artistPosition].albuns[item.album].tracks[
                      item.track
                    ].title
                  }
                  amount={item.amount}
                />
              ))}
            </S.Section>

            <S.Section>
              <S.SectionTitle>Lancamentos populares</S.SectionTitle>

              {data.discography.map((item, index) => (
                <DiscographyItem key={index} data={item} />
              ))}
            </S.Section>

            <Slider
              title={`Com ${data.title}`}
              data={data.appearsIn}
              style={{ marginLeft: -16 }}
            />

            <S.Section>
              <S.SectionTitle>Sobre</S.SectionTitle>

              <S.AboutImageBackground
                source={data.image}
                imageStyle={{
                  resizeMode: "cover",
                  borderRadius: 4,
                }}
              >
                <LinearGradient
                  colors={["transparent", theme.COLORS.DARK]}
                  start={[0, 0]}
                  end={[0, 1]}
                  style={{ flex: 1, justifyContent: "flex-end" }}
                >
                  <S.AboutDescription numberOfLines={3}>
                    {data.description}
                  </S.AboutDescription>
                </LinearGradient>
              </S.AboutImageBackground>
            </S.Section>
          </S.Container>
        </S.ScrollContainer>
      </S.Wrapper>
    </>
  );
}
