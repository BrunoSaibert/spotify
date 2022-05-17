import React from "react";

import theme from "../../styles/theme";

import * as S from "./styles";

type ButtonIconProps = {
  name: string;
  color?: keyof typeof theme.COLORS;
};

export function ButtonIcon({ name, color = "GREY" }: ButtonIconProps) {
  return (
    <S.Button>
      <S.Icon name={name} color={color} />
    </S.Button>
  );
}
