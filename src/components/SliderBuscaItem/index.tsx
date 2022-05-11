import React from "react";
import { ImageProps } from "react-native";

import * as S from "./styles";

export type SliderBuscaItemProps = {
  id: string;
  title: string;
  imageUrl: ImageProps;
  bgColor: string;
};

type Props = {
  data: SliderBuscaItemProps;
};

export function SliderBuscaItem({ data }: Props) {
  return (
    <S.Container bgColor={data.bgColor}>
      <S.Title numberOfLines={3}>{data.title}</S.Title>

      <S.Image source={data.imageUrl} />
    </S.Container>
  );
}
