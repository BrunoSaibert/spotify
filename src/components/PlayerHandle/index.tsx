import React, { ReactNode, useState } from "react";
import { Pressable, View, ImageProps } from "react-native";

import { DATA_ARTISTS } from "../../utils/database";
import { ButtonIcon } from "../ButtonIcon";
import { PlayerModal } from "../PlayerModal";

import * as S from "./styles";

type PlayerHandleProps = {
  children: ReactNode;
};

export type MusicDataProps = {
  title: string;
  artist: string;
  timer: string;
  timerTotal: Date;
  image: ImageProps;
  bgColor: string;
};

export function PlayerHandle({ children }: PlayerHandleProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const artistPosition = 9;
  const artistAlbum = 0;
  const artistAlbumTrack = 0;

  const data = {
    artist: DATA_ARTISTS[artistPosition].title,
    title:
      DATA_ARTISTS[artistPosition].albuns[artistAlbum].tracks[artistAlbumTrack]
        .title,
    timerTotal:
      DATA_ARTISTS[artistPosition].albuns[artistAlbum].tracks[artistAlbumTrack]
        .duration,
    timer: "0:49",
    image: DATA_ARTISTS[artistPosition].albuns[artistAlbum].imageUrl,
    bgColor: DATA_ARTISTS[artistPosition].albuns[artistAlbum].bgColor,
  };

  return (
    <>
      {children}
      <S.Container>
        <S.Player>
          <Pressable onPress={() => setModalVisible(true)}>
            <S.Wrapper>
              <S.Image source={data.image} />
              <View style={{ justifyContent: "center" }}>
                <S.Title>{data.title}</S.Title>
                <S.SubTitle>{data.artist}</S.SubTitle>
              </View>
            </S.Wrapper>
          </Pressable>

          <S.Wrapper>
            <ButtonIcon name="speaker" />
            <ButtonIcon name="heart" color="PRIMARY" />
            <ButtonIcon name="play" size={32} color="LIGHTER" />
          </S.Wrapper>
        </S.Player>

        <S.Percent>
          <S.PercentBar />
        </S.Percent>
      </S.Container>

      <PlayerModal
        data={data}
        handleClose={() => setModalVisible(false)}
        visible={modalVisible}
      />
    </>
  );
}
