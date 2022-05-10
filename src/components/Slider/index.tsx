import React, { useEffect } from "react";
import { LogBox, View } from "react-native";

import { SliderItem, SliderItemProps } from "../SliderItem";

import * as S from "./styles";

type Props = {
  title: string;
  size?: "small" | "large";
  data: SliderItemProps[];
};

export function Slider({ title, size = "large", data }: Props) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <S.Container>
      <S.Title style={{ color: "white" }}>{title}</S.Title>

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
