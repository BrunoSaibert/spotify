import React from "react";

import { RecentesItem, RecentesItemProps } from "../RecentesItem";

import * as S from "./styles";

export function RecentesLista({ data }: any) {
  return (
    <S.Container>
      {data.map((item: RecentesItemProps) => (
        <RecentesItem key={item.id} data={item} />
      ))}
    </S.Container>
  );
}
