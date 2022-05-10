import React from "react";
import { useTheme } from "styled-components";

import { RecentesLista } from "../../components/RecentesLista";
import { Slider } from "../../components/Slider";

import {
  DATA_ARTISTAS,
  DATA_PODCAST,
  DATA_RECENTES,
} from "../../utils/database";

import * as S from "./styles";

export function Home() {
  const theme = useTheme();

  const data = new Date();
  const hora = data.getHours();
  let titulo = "";

  if (hora > 6 && hora < 12) {
    titulo = "Bom dia";
  } else if (hora < 18) {
    titulo = "Boa tarde";
  } else {
    titulo = "Boa noite";
  }

  return (
    <S.Container showsVerticalScrollIndicator={false}>
      <S.Header
        colors={[theme.COLORS.PRIMARY, "transparent"]}
        start={[0, 0]}
        end={[0.12, 0.6]}
      >
        <S.TituloWrapper>
          <S.Titulo>{titulo}</S.Titulo>

          <S.BotaoAcaoWrapper>
            <S.BotaoAcao>
              <S.BotaoAcaoIcone name="bell" />
            </S.BotaoAcao>
            <S.BotaoAcao>
              <S.BotaoAcaoIcone name="clock" />
            </S.BotaoAcao>
            <S.BotaoAcao>
              <S.BotaoAcaoIcone name="settings" />
            </S.BotaoAcao>
          </S.BotaoAcaoWrapper>
        </S.TituloWrapper>

        <RecentesLista data={DATA_RECENTES} />
      </S.Header>

      <Slider title="Seus programas" data={DATA_PODCAST} />
      <Slider title="Tocadas recentemente" data={DATA_RECENTES} size="small" />
      <Slider title="Principais artistas" data={DATA_ARTISTAS} />
      <Slider title="100% você" data={DATA_RECENTES} />
    </S.Container>
  );
}
