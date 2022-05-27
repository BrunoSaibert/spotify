import React from "react";
import { View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import perfilImage from "../../assets/images/profile.jpg";
import { LibraryItem } from "../../components/LibraryItem";
import { ButtonIcon } from "../../components/ButtonIcon";
import {
  DATA_ARTISTAS,
  DATA_PODCAST,
  DATA_RECENTES,
} from "../../utils/database";

import * as S from "./styles";

export function LibraryScreen() {
  return (
    <S.Container
      bounces={false}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: getBottomSpace() + 144 }}
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
            <ButtonIcon name="magnify" color="LIGHTER" />
            <ButtonIcon
              name="plus"
              color="LIGHTER"
              style={{ marginRight: -12 }}
            />
          </S.ButtonWrapper>
        </S.TitleWrapper>

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

        {[...DATA_RECENTES, ...DATA_PODCAST, ...DATA_ARTISTAS].map(
          (item, index) => (
            <LibraryItem key={index} data={item} />
          )
        )}
      </S.Content>
    </S.Container>
  );
}
