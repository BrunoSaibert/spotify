import React from "react";
import { ImageProps, View } from "react-native";

import * as S from "./styles";

export type BibliotecaItemProps = {
  id: string;
  type: "playlist" | "artist" | "podcast";
  title?: string;
  description?: string;
  author?: string;
  imageUrl: ImageProps;
};

type Props = {
  data: BibliotecaItemProps;
};

let round: number;

export function BibliotecaItem({ data }: Props) {
  switch (data.type) {
    case "playlist":
      round = 0;
      break;
    case "artist":
      round = 64;
      break;
    case "podcast":
      round = 8;
      break;

    default:
      break;
  }

  return (
    <S.Container>
      <S.Imagem source={data.imageUrl} round={round} />

      <View>
        <S.Title numberOfLines={1}>{data.title}</S.Title>

        <S.Description>
          {data.type}
          {data.description ? ` · ${data.description}` : null}
          {data.author ? ` · ${data.author}` : null}
        </S.Description>
      </View>
    </S.Container>
  );
}
