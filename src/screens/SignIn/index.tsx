import React from "react";
import { useTheme } from "styled-components";

import LogoWhiteSvg from "../../assets/Logo-white.svg";

import * as S from "./styles";

export function SignIn() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Content>
        <LogoWhiteSvg />
        <S.Title>
          Milhões de músicas à sua escolha.{"\n"}Grátis no Spotify.
        </S.Title>

        <S.Button
          activeOpacity={0.7}
          style={{ borderWidth: 0, backgroundColor: theme.COLORS.PRIMARY }}
        >
          <S.ButtonText style={{ color: theme.COLORS.DARKER }}>
            Inscreva-se grátis
          </S.ButtonText>
        </S.Button>

        <S.Button activeOpacity={0.7}>
          <S.ButtonIcon name="cellphone" />
          <S.ButtonText>Continuar com um número de telefone</S.ButtonText>
        </S.Button>

        <S.Button activeOpacity={0.7}>
          <S.ButtonIcon name="google" />
          <S.ButtonText>Continuar com o Google</S.ButtonText>
        </S.Button>

        <S.Button activeOpacity={0.7}>
          <S.ButtonIcon name="facebook" />
          <S.ButtonText>Continuar com o Facebook</S.ButtonText>
        </S.Button>

        <S.Button activeOpacity={0.7} style={{ borderWidth: 0 }}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.Content>
    </S.Container>
  );
}
