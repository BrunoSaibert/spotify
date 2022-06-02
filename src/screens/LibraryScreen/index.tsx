import React, { useState } from "react";
import { Animated, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import perfilImage from "../../assets/images/Profile.jpg";

import { LibraryItem } from "../../components/LibraryItem";
import { ButtonIcon } from "../../components/ButtonIcon";

import { DATA_ARTISTS, DATA_PODCAST, DATA_RECENTS } from "../../utils/database";

import * as S from "./styles";

export function LibraryScreen() {
  const [scrollY, _] = useState(new Animated.Value(0));

  return (
    <S.Container
      bounces={false}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: getBottomSpace() + 144 }}
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
    >
      <S.Header
        style={{
          borderBottomColor: "#010101",
          borderBottomWidth: 2,
        }}
      >
        <S.TitleWrapper>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <S.Image source={perfilImage} />
            <S.Title>Sua Biblioteca</S.Title>
          </View>

          <S.ButtonWrapper>
            <ButtonIcon size={32} name="magnify" color="LIGHTER" />
            <ButtonIcon
              size={32}
              name="plus"
              color="LIGHTER"
              style={{ marginRight: -12 }}
            />
          </S.ButtonWrapper>
        </S.TitleWrapper>

        <Animated.View
          style={{
            opacity: scrollY.interpolate({
              inputRange: [0, 12],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
            marginTop: scrollY.interpolate({
              inputRange: [0, 24],
              outputRange: [0, -40],
              extrapolate: "clamp",
            }),
          }}
        >
          <S.FilterButtonWrapper
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <S.FilterButton activeOpacity={0.7} style={{ marginLeft: 16 }}>
              <S.FilterButtonText>Playlist</S.FilterButtonText>
            </S.FilterButton>

            <S.FilterButton activeOpacity={0.7}>
              <S.FilterButtonText>Artitas</S.FilterButtonText>
            </S.FilterButton>

            <S.FilterButton activeOpacity={0.7}>
              <S.FilterButtonText>Álbuns</S.FilterButtonText>
            </S.FilterButton>

            <S.FilterButton activeOpacity={0.7}>
              <S.FilterButtonText>Podcasts e programas</S.FilterButtonText>
            </S.FilterButton>

            <S.FilterButton activeOpacity={0.7} style={{ marginRight: 16 }}>
              <S.FilterButtonText>Baixado</S.FilterButtonText>
            </S.FilterButton>
          </S.FilterButtonWrapper>
        </Animated.View>
      </S.Header>

      <S.Content>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <ButtonIcon
            name="swap-vertical"
            color="LIGHTER"
            size={20}
            style={{ marginLeft: -12 }}
            text="Mais recente"
          />
          <ButtonIcon
            name="qrcode"
            color="LIGHTER"
            size={20}
            style={{ marginRight: -12 }}
          />
        </View>

        {[...DATA_RECENTS, ...DATA_PODCAST, ...DATA_ARTISTS].map(
          (item, index) => (
            <LibraryItem key={index} data={item} />
          )
        )}
      </S.Content>
    </S.Container>
  );
}
