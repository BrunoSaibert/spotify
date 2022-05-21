import React from "react";

import { SearchItem, SearchItemProps } from "../SearchItem";

import * as S from "./styles";

type SearchListProps = {
  title?: string;
  data: SearchItemProps[];
};

export function SearchList({ title, data }: SearchListProps) {
  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}

      <S.List>
        {data.map((item, index) => (
          <SearchItem key={index} data={item} />
        ))}
      </S.List>
    </S.Container>
  );
}
