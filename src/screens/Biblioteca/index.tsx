import React from "react";
import { View } from "react-native";

import perfilImage from "../../assets/images/profile.jpg";
import { BibliotecaItem } from "../../components/BibliotecaItem";
import {
  DATA_ARTISTAS,
  DATA_PODCAST,
  DATA_RECENTES,
} from "../../utils/database";

import * as S from "./styles";

export function Biblioteca() {
  return (
    <S.Container stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <S.TituloWrapper>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <S.Imagem source={perfilImage} />
          <S.Titulo>Sua Biblioteca</S.Titulo>
        </View>

        <S.BotaoAcaoWrapper>
          <S.BotaoAcao>
            <S.BotaoAcaoIcone name="search" />
          </S.BotaoAcao>
          <S.BotaoAcao>
            <S.BotaoAcaoIcone name="plus" />
          </S.BotaoAcao>
        </S.BotaoAcaoWrapper>
      </S.TituloWrapper>

      {[...DATA_RECENTES, ...DATA_PODCAST, ...DATA_ARTISTAS].map(
        (item, index) => (
          <BibliotecaItem key={index} data={item} />
        )
      )}
    </S.Container>
  );
}
