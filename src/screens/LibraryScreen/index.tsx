import React from "react";
import { View } from "react-native";

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
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <S.TitleWrapper>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <S.Image source={perfilImage} />
          <S.Title>Sua Biblioteca</S.Title>
        </View>

        <S.ButtonWrapper>
          <ButtonIcon name="search" color="LIGHTER" />
          <ButtonIcon name="plus" color="LIGHTER" />
        </S.ButtonWrapper>
      </S.TitleWrapper>

      {[...DATA_RECENTES, ...DATA_PODCAST, ...DATA_ARTISTAS].map(
        (item, index) => (
          <LibraryItem key={index} data={item} />
        )
      )}
    </S.Container>
  );
}
