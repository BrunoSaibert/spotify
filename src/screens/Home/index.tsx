import React from "react";
import { useTheme } from "styled-components";

import { RecentesLista } from "../../components/RecentesLista";

import { DATA_RECENTES } from "../../utils/database";

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
    <S.Container>
      <S.Header
        colors={[theme.COLORS.PRIMARY, theme.COLORS.DARKER]}
        start={[0, 0]}
        end={[0.12, 0.22]}
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
    </S.Container>
  );
}
