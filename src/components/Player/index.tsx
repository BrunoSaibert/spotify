import React, { ReactNode, useState } from "react";
import { Pressable, Text, View, Modal } from "react-native";

import image from "../../assets/images/tame_impala.jpg";
import { ButtonIcon } from "../ButtonIcon";

import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export function Player({ children }: Props) {
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
                <S.Imagem source={image} />
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

          <S.PercentBar>
            <S.Percent />
          </S.PercentBar>
        </View>
      </S.Container>

      <Modal animationType="slide" visible={modalVisible} statusBarTranslucent>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Text style={{ marginBottom: 20, fontSize: 24 }}>Hello World!</Text>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text>Fechar Modal</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
}
