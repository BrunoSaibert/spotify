import React from "react";
import { useTheme } from "styled-components";

import { SearchList } from "../../components/SearchList";
import { DATA_ARTISTAS, DATA_PODCAST } from "../../utils/database";

import * as S from "./styles";

export function SearchScreen() {
  const theme = useTheme();

  return (
    <S.Container
      stickyHeaderIndices={[1]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 135 }}
    >
      <S.Title>Buscar</S.Title>

      <S.SearchInputWrapper>
        <S.SearchInput>
          <S.InputIcon name="magnify" />
          <S.Input
            placeholder="Artistas, músicas ou podcasts"
            placeholderTextColor={theme.COLORS.DARK}
          />
        </S.SearchInput>
      </S.SearchInputWrapper>

      <SearchList title="Seus artitas favoritos" data={DATA_ARTISTAS} />
      <SearchList title="Categorias populares de podcast" data={DATA_PODCAST} />
      <SearchList
        title="Todas as sessões"
        data={[...DATA_ARTISTAS, ...DATA_PODCAST]}
      />
    </S.Container>
  );
}
