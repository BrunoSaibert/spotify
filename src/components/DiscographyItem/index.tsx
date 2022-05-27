import React from "react";
import { ImageProps, View } from "react-native";

import * as S from "./styles";

export type DiscographyItemProps = {
  imageUrl: ImageProps;
  title: string;
  year: number;
};

type Props = {
  data: DiscographyItemProps;
};

export function DiscographyItem({ data }: Props) {
  return (
    <S.Container>
      <S.Image source={data.imageUrl} />
      <View style={{ flex: 1 }}>
        <S.Title>{data.title}</S.Title>
        <S.Amount>{data.year} · Álbum</S.Amount>
      </View>
    </S.Container>
  );
}
