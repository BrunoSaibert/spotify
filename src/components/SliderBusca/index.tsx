import React from "react";

import { SliderBuscaItem } from "../SliderBuscaItem";

import * as S from "./styles";

export function SliderBusca({ title, data }: any) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.List>
        {data.map((item, index) => (
          <SliderBuscaItem key={index} data={item} />
        ))}
      </S.List>
    </S.Container>
  );
}
