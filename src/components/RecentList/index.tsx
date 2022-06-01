import React from "react";

import { RecentItem, RecentItemProps } from "../RecentItem";

import * as S from "./styles";

export function RecentList({ data }: any) {
  return (
    <S.Container>
      {data.slice(0, 6).map((item: RecentItemProps, index: number) => (
        <RecentItem key={index} data={item} />
      ))}
    </S.Container>
  );
}
