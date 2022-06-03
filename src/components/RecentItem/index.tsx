import React from "react";
import { ImageProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

export type RecentItemProps = {
  id: string;
  title: string;
  imageUrl: ImageProps;
};

type Props = {
  data: RecentItemProps;
};

export function RecentItem({ data }: Props) {
  const { navigate } = useNavigation();

  function handleNavigation() {
    navigate("PlaylistScreen");
  }

  return (
    <S.Container>
      <S.Button activeOpacity={0.7} onPress={handleNavigation}>
        <S.Image
          source={data.imageUrl}
          style={{
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 4,
          }}
        />
        <S.Title numberOfLines={2}>{data.title}</S.Title>
      </S.Button>
    </S.Container>
  );
}
