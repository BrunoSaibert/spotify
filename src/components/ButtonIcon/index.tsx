import React from "react";
import { TouchableOpacityProps } from "react-native";

import theme from "../../styles/theme";

import * as S from "./styles";

type ButtonIconProps = {
  name: string;
  size?: number;
  color?: keyof typeof theme.COLORS;
} & TouchableOpacityProps;

export function ButtonIcon({
  name,
  size,
  color = "GREY",
  ...props
}: ButtonIconProps) {
  return (
    <S.Button activeOpacity={0.7} {...props}>
      <S.Icon name={name} color={color} size={size} />
    </S.Button>
  );
}
