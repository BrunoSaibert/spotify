import React from "react";
import { View } from "react-native";

import { SliderItem, SliderItemProps } from "../SliderItem";

import * as S from "./styles";

export type SliderProps = {
  title: string;
  size?: "small" | "large";
  data: SliderItemProps[];
};

export function Slider({ title, size = "large", data }: SliderProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Slider
        data={data}
        renderItem={({ item }: any) => <SliderItem data={item} size={size} />}
        contentContainerStyle={{ paddingRight: 32 }}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        keyExtractor={({ id }: any) => `${id}`}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </S.Container>
  );
}
