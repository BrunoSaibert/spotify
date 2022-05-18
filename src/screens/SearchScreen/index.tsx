import React from "react";
import { useTheme } from "styled-components";

import { SliderBusca } from "../../components/SliderBusca";
import { DATA_ARTISTAS, DATA_PODCAST } from "../../utils/database";

import * as S from "./styles";

export function SearchScreen() {
  const theme = useTheme();

  return (
    <S.Container
      stickyHeaderIndices={[1]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <S.Title>Buscar</S.Title>

      <S.SearchInputWrapper>
        <S.SearchInput>
          <S.InputIcon name="search" />
          <S.Input
            placeholder="Artistas, músicas ou podcasts"
            placeholderTextColor={theme.COLORS.DARK}
          />
        </S.SearchInput>
      </S.SearchInputWrapper>

      <SliderBusca title="Seus artitas favoritos" data={DATA_ARTISTAS} />
      <SliderBusca
        title="Categorias populares de podcast"
        data={DATA_PODCAST}
      />
      <SliderBusca
        title="Categorias populares de podcast"
        data={DATA_ARTISTAS}
      />
    </S.Container>
  );
}
