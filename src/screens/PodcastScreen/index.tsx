import React, { useState } from "react";
import { ScrollView, View, Text, Animated } from "react-native";
import { useTheme } from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as S from "./styles";

import { NavigationScreenProps } from "../../navigation/types";

import { ButtonIcon } from "../../components/ButtonIcon";

import { DATA_PODCAST } from "../../utils/database";

export function PodcastScreen(props: NavigationScreenProps<"PodcastScreen">) {
  const { navigation } = props;

  const [scrollY, _] = useState(new Animated.Value(0));

  function handleNavigation() {
    navigation.goBack();
  }

  const theme = useTheme();

  const podcastPosition = 1;

  const data = {
    bgColor: DATA_PODCAST[podcastPosition].bgColor,
    imageUrl: DATA_PODCAST[podcastPosition].imageUrl,
    title: DATA_PODCAST[podcastPosition].title,
    author: DATA_PODCAST[podcastPosition].author,
    description: DATA_PODCAST[podcastPosition].description,
    stars: DATA_PODCAST[podcastPosition].stars,
    starsAmount: DATA_PODCAST[podcastPosition].starsAmount,
    categories: DATA_PODCAST[podcastPosition].categories,
    episodes: DATA_PODCAST[podcastPosition].episodes,
  };

  return (
    <S.Container>
      <S.AnimatedHeader
        style={{
          width: "100%",
          zIndex: 90,

          backgroundColor: scrollY.interpolate({
            inputRange: [0, 32, 64],
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
                inputRange: [0, 80, 112],
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
        stickyHeaderIndices={[2]}
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
        <S.Header
          colors={[data.bgColor, theme.COLORS.DARKER]}
          start={[0, 0]}
          end={[0, 1]}
        >
          <Animated.View
            style={{
              flexDirection: "row",
              alignItems: "center",
              opacity: scrollY.interpolate({
                inputRange: [0, 140],
                outputRange: [1, 0],
                extrapolate: "clamp",
              }),
            }}
          >
            <S.PodcastImage source={data.imageUrl} />
            <View
              style={{
                flex: 1,
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              <S.PodcastTitle length={data.title.length}>
                {data.title}
              </S.PodcastTitle>
              <S.PodcastAuthor>{data.author}</S.PodcastAuthor>
            </View>
          </Animated.View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 32,
            }}
          >
            <S.ButtonFollow>
              <S.ButtonFollowText>Seguir</S.ButtonFollowText>
            </S.ButtonFollow>
            <ButtonIcon name="bell-outline" />
            <ButtonIcon name="cog-outline" />
            <ButtonIcon name="dots-vertical" />
          </View>
        </S.Header>

        <S.Content>
          <S.Description numberOfLines={2}>{data.description}</S.Description>

          <ScrollView horizontal>
            <S.ButtonTag>
              <S.ButtonTagText>
                {data.stars}
                <MaterialCommunityIcons
                  name="star"
                  size={16}
                  color={theme.COLORS.LIGHTER}
                />
                <Text
                  style={{
                    color: theme.COLORS.GREY,
                  }}
                >
                  ({data.starsAmount})
                </Text>
              </S.ButtonTagText>
            </S.ButtonTag>
            <Text
              style={{
                color: theme.COLORS.GREY,
                fontSize: 32,
                lineHeight: 36,
                marginRight: 12,
              }}
            >
              ·
            </Text>
            {data.categories.map((item, index) => (
              <S.ButtonTag key={index}>
                <S.ButtonTagText>{item}</S.ButtonTagText>
              </S.ButtonTag>
            ))}
          </ScrollView>
        </S.Content>

        <S.Filter>
          <S.FilterTitle>Todos os episódios</S.FilterTitle>

          <S.ButtonFilter>
            <S.ButtonFilterText>Classificar</S.ButtonFilterText>
          </S.ButtonFilter>
        </S.Filter>

        <S.Content>
          {data.episodes.map((item, index) => (
            <View
              key={index}
              style={{
                marginVertical: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <S.EpisodeImage source={item.imageUrl ?? data.imageUrl} />
                <S.EpisodeTitle numberOfLines={2}>{item.title}</S.EpisodeTitle>
              </View>

              <S.EpisodeDescription numberOfLines={2}>
                {item.description}
              </S.EpisodeDescription>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 12,
                  marginHorizontal: -12,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {item.downloaded ? (
                    <ButtonIcon name="check-circle" color="PRIMARY" />
                  ) : (
                    <ButtonIcon name="plus-circle-outline" />
                  )}

                  <ButtonIcon name="download-circle-outline" />
                  <ButtonIcon name="share-variant" />
                  <ButtonIcon name="dots-vertical" />
                </View>
                <ButtonIcon name="play-circle" size={32} color="LIGHTER" />
              </View>

              <View
                style={{
                  width: "100%",
                  height: 1,
                  backgroundColor: theme.COLORS.DARK,
                  marginTop: 16,
                  marginBottom: 8,
                }}
              />
            </View>
          ))}
        </S.Content>
      </ScrollView>
    </S.Container>
  );
}
