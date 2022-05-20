import React from "react";
import { ImageProps, View } from "react-native";

import * as S from "./styles";

export type LibraryItemProps = {
  id: string;
  type: "playlist" | "artist" | "podcast";
  title?: string;
  description?: string;
  author?: string;
  imageUrl: ImageProps;
};

type Props = {
  data: LibraryItemProps;
};

let round: number;

export function LibraryItem({ data }: Props) {
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
      <S.Image source={data.imageUrl} round={round} />

      <View style={{ flex: 1 }}>
        <S.Title numberOfLines={1}>{data.title}</S.Title>

        <S.Description numberOfLines={1}>
          {data.type}
          {data.description ? ` · ${data.description}` : null}
          {data.author ? ` · ${data.author}` : null}
        </S.Description>
      </View>
    </S.Container>
  );
}
