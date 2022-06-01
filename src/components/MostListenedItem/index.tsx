import React from "react";
import { ImageProps, View } from "react-native";
import { formatCommaSeparator } from "../../utils/utils";

import { ButtonIcon } from "../ButtonIcon";

import * as S from "./styles";

export type MostListenedItemProps = {
  imageUrl: ImageProps;
  title: string;
  amount: number;
};

type Props = {
  position: number;
} & MostListenedItemProps;

export function MostListenedItem({ position, imageUrl, title, amount }: Props) {
  return (
    <S.Container>
      <S.Position>{position}</S.Position>
      <S.Image source={imageUrl} />
      <View style={{ flex: 1 }}>
        <S.Title numberOfLines={1}>{title}</S.Title>
        <S.Amount>{formatCommaSeparator(amount)}</S.Amount>
      </View>
      <ButtonIcon
        name="dots-vertical"
        color="GREY"
        style={{ marginRight: -12 }}
      />
    </S.Container>
  );
}
