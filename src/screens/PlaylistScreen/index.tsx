import React, { useState } from "react";
import { ScrollView, View, Animated } from "react-native";
import { useTheme } from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import * as S from "./styles";

import { NavigationScreenProps } from "../../navigation/types";

import { ButtonIcon } from "../../components/ButtonIcon";

import PlayShuffleSvg from "../../assets/PlayShuffle.svg";

import { DATA_ARTISTS, DATA_PLAYLISTS } from "../../utils/database";
import { formatCommaSeparator } from "../../utils/utils";

export function PlaylistScreen(props: NavigationScreenProps<"PlaylistScreen">) {
  const { navigation } = props;
  const [scrollY, _] = useState(new Animated.Value(0));

  function handleNavigation() {
    navigation.goBack();
  }

  const theme = useTheme();

  const playlistPosition = 0;

  const data = {
    title: DATA_PLAYLISTS[playlistPosition].title,
    bgColor: DATA_PLAYLISTS[playlistPosition].bgColor,
    description: DATA_PLAYLISTS[playlistPosition].description,
    image: DATA_PLAYLISTS[playlistPosition].imageUrl,
    setlist: DATA_PLAYLISTS[playlistPosition].setlist,
    author: DATA_PLAYLISTS[playlistPosition].author,
    likes: DATA_PLAYLISTS[playlistPosition].likes,
  };

  return (
    <S.Container>
      <S.AnimatedHeader
        style={{
          width: "100%",
          zIndex: 90,

          backgroundColor: scrollY.interpolate({
            inputRange: [0, 144, 176],
            outputRange: ["transparent", "transparent", data.bgColor],
            extrapolate: "clamp",
          }),

          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ButtonIcon
            name="arrow-left"
            size={28}
            color="LIGHTER"
            onPress={handleNavigation}
          />

          <Animated.Text
            style={{
              marginLeft: 20,
              opacity: scrollY.interpolate({
                inputRange: [0, 176, 192],
                outputRange: [0, 0, 1],
                extrapolate: "clamp",
              }),
            }}
          >
            <S.HeaderTitle>{data.title}</S.HeaderTitle>
          </Animated.Text>
        </View>
      </S.AnimatedHeader>

      <ScrollView
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
        contentContainerStyle={{ paddingBottom: getBottomSpace() + 144 }}
      >
        <Animated.View
          style={{
            top: scrollY.interpolate({
              inputRange: [0, 96, 192],
              outputRange: [0, 96, 0],
              extrapolate: "clamp",
            }),
          }}
        >
          <S.Header
            colors={[data.bgColor, theme.COLORS.DARKER]}
            start={[0, 0]}
            end={[0, 1]}
          >
            <S.PlaylistImage
              source={data.image}
              width={scrollY.interpolate({
                inputRange: [0, 96],
                outputRange: [240, 96],
                extrapolate: "clamp",
              })}
              height={scrollY.interpolate({
                inputRange: [0, 96],
                outputRange: [240, 96],
                extrapolate: "clamp",
              })}
              style={{
                opacity: scrollY.interpolate({
                  inputRange: [0, 96, 128],
                  outputRange: [1, 1, 0],
                  extrapolate: "clamp",
                }),
              }}
            />

            <S.Description numberOfLines={3}>{data.description}</S.Description>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <S.AuthorImage source={data.author.imageUrl} />
              <S.AuthorName>{data.author.name}</S.AuthorName>
            </View>

            <S.LikesAmount>
              {formatCommaSeparator(data.likes)} curtidas · 5h 11min
            </S.LikesAmount>
          </S.Header>

          <S.Content>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ButtonIcon
                  name="heart"
                  color="PRIMARY"
                  style={{ marginLeft: -12 }}
                />
                <ButtonIcon name="download-circle-outline" />
                <ButtonIcon name="dots-vertical" />
              </View>

              <PlayShuffleSvg />
            </View>

            {data.setlist.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 8,
                }}
              >
                <S.AlbumImage
                  source={DATA_ARTISTS[item.artist].albuns[item.album].imageUrl}
                />
                <View style={{ flex: 1 }}>
                  <S.TrackTitle>
                    {DATA_ARTISTS[item.artist].albuns[item.album].title}
                  </S.TrackTitle>
                  <S.TrackArtist>
                    {DATA_ARTISTS[item.artist].title}
                  </S.TrackArtist>
                </View>
                <ButtonIcon name="dots-vertical" />
              </View>
            ))}
          </S.Content>
        </Animated.View>
      </ScrollView>
    </S.Container>
  );
}
