import React from "react";

import { RecentItem, RecentItemProps } from "../RecentItem";

import * as S from "./styles";

export function RecentList({ data }: any) {
  return (
    <S.Container>
      {data.map((item: RecentItemProps) => (
        <RecentItem key={item.id} data={item} />
      ))}
    </S.Container>
  );
}
