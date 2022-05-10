import React from "react";

import { RecentesItem } from "../RecentesItem";

import * as S from "./styles";

export function RecentesLista({ data }: any) {
  return (
    <S.Container
      data={data}
      renderItem={({ item }: any) => <RecentesItem data={item} />}
      keyExtractor={({ id }: any) => `${id}`}
      showsHorizontalScrollIndicator={false}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      numColumns={2}
    />
  );
}
