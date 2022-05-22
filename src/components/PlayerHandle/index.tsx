import React, { ReactNode, useState } from "react";
import { Pressable, View, ImageProps } from "react-native";

import image from "../../assets/images/portugal_the_man.jpg";
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
  timerTotal: string;
  image: ImageProps;
};

export function PlayerHandle({ children }: PlayerHandleProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const data = {
    title: "Hip Hop Kids",
    artist: "Portugal. The Man",
    timer: "0:49",
    timerTotal: "3:27",
    image,
  };

  return (
    <>
      {children}
      <S.Container
        colors={["transparent", "#222222dd"]}
        start={[0, 0]}
        end={[0, 1]}
      >
        <View>
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
        </View>
      </S.Container>

      <PlayerModal
        data={data}
        handleClose={() => setModalVisible(false)}
        visible={modalVisible}
      />
    </>
  );
}
