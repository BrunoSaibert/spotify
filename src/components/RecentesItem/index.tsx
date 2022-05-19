import React from "react";
import { ImageProps } from "react-native";

import * as S from "./styles";

export type RecentesItemProps = {
  id: string;
  title: string;
  imageUrl: ImageProps;
};

type Props = {
  data: RecentesItemProps;
};

export function RecentesItem({ data }: Props) {
  return (
    <S.Container>
      <S.Button activeOpacity={0.7}>
        <S.Imagem
          source={data.imageUrl}
          style={{
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 4,
          }}
        />
        <S.Titulo numberOfLines={2}>{data.title}</S.Titulo>
      </S.Button>
    </S.Container>
  );
}
