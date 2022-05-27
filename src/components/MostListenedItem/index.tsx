import React from "react";
import { ImageProps, View } from "react-native";

import { ButtonIcon } from "../ButtonIcon";

import * as S from "./styles";

export type MostListenedItemProps = {
  imageUrl: ImageProps;
  title: string;
  amount: number;
};

type Props = {
  position: number;
  data: MostListenedItemProps;
};

export function MostListenedItem({ position, data }: Props) {
  return (
    <S.Container>
      <S.Position>{position}</S.Position>
      <S.Image source={data.imageUrl} />
      <View style={{ flex: 1 }}>
        <S.Title>{data.title}</S.Title>
        <S.Amount>{data.amount}</S.Amount>
      </View>
      <ButtonIcon
        name="dots-vertical"
        color="GREY"
        style={{ marginRight: -12 }}
      />
    </S.Container>
  );
}
