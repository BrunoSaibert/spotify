import React from "react";
import { ImageProps } from "react-native";

import * as S from "./styles";

export type SearchItemProps = {
  id: string;
  title: string;
  imageUrl: ImageProps;
  bgColor: string;
};

type Props = {
  data: SearchItemProps;
};

export function SearchItem({ data }: Props) {
  return (
    <S.Container>
      <S.Button activeOpacity={0.7} bgColor={data.bgColor}>
        <S.Title numberOfLines={3}>{data.title}</S.Title>

        <S.Image source={data.imageUrl} />
      </S.Button>
    </S.Container>
  );
}
