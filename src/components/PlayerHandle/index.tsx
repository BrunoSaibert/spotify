import React, { ReactNode, useState } from "react";
import { Pressable, View } from "react-native";

import image from "../../assets/images/portugal_the_man.jpg";
import { ButtonIcon } from "../ButtonIcon";
import { PlayerModal } from "../PlayerModal";

import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export function PlayerHandle({ children }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

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
                <S.Image source={image} />
                <View style={{ justifyContent: "center" }}>
                  <S.Title>Desire Be Desire Go</S.Title>
                  <S.SubTitle>Tame Impala</S.SubTitle>
                </View>
              </S.Wrapper>
            </Pressable>

            <S.Wrapper>
              <ButtonIcon name="speaker" />
              <ButtonIcon name="heart" />
              <ButtonIcon name="play" color="LIGHTER" />
            </S.Wrapper>
          </S.Player>

          <S.Percent>
            <S.PercentBar />
          </S.Percent>
        </View>
      </S.Container>

      <PlayerModal
        handleClose={() => setModalVisible(false)}
        visible={modalVisible}
      />
    </>
  );
}
