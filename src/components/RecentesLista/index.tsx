import React from "react";

import { RecentItem, RecentItemProps } from "../RecentItem";

import * as S from "./styles";

export function RecentesLista({ data }: any) {
  return (
    <S.Container>
      {data.map((item: RecentItemProps) => (
        <RecentItem key={item.id} data={item} />
      ))}
    </S.Container>
  );
}
