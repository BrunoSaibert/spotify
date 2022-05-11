import React from "react";

import { SliderBuscaItem } from "../SliderBuscaItem";

import * as S from "./styles";

export function SliderBusca({ title, data }: any) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.List
        data={data}
        renderItem={({ item }: any) => <SliderBuscaItem data={item} />}
        keyExtractor={({ id }: any) => `${id}`}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={2}
      />
    </S.Container>
  );
}
