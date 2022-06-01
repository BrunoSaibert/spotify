import React from "react";
import { ImageProps } from "react-native";

import * as S from "./styles";

export type SliderItemProps = {
  id: string;
  type: "playlist" | "artist" | "podcast";
  title?: string;
  description?: string;
  author?: string;
  imageUrl: ImageProps;
};

type Props = {
  data: SliderItemProps;
  size: "small" | "large";
};

let round: number;
let sizeCard: number;

export function SliderItem({ data, size }: Props) {
  const textAlign: string = data.type === "artist" ? "center" : "left";

  switch (size) {
    case "small":
      sizeCard = 112;
      break;

    default:
      sizeCard = 144;
      break;
  }

  switch (data.type) {
    case "playlist":
      round = 0;
      break;
    case "artist":
      round = sizeCard;
      break;
    case "podcast":
      round = 8;
      break;

    default:
      break;
  }

  return (
    <S.Container size={sizeCard}>
      <S.Image source={data.imageUrl} size={sizeCard} round={round} />

      {!!data.title && (
        <S.Title
          align={textAlign}
          numberOfLines={data.type === "podcast" ? 1 : 2}
        >
          {data.title}
        </S.Title>
      )}

      {size !== "small" && !!data.description && (
        <S.Description align={textAlign} numberOfLines={2}>
          {data.description}
        </S.Description>
      )}

      {size !== "small" && !!data.author && (
        <S.Description align={textAlign} numberOfLines={2}>
          {data.type === "podcast" && "Show · "}
          {data.author}
        </S.Description>
      )}
    </S.Container>
  );
}
