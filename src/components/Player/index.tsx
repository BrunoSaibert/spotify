import React, { ReactNode, useState } from "react";
import { Pressable, Text, View, Modal } from "react-native";
import { useTheme } from "styled-components";

import image from "../../assets/images/tame_impala.jpg";

import * as S from "./styles";

type Props = {
  children: ReactNode;
};

export function Player({ children }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  const theme = useTheme();

  return (
    <>
      {children}
      <S.Container
        colors={["transparent", theme.COLORS.DARKER]}
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
              <S.BotaoAcao>
                <S.BotaoAcaoIcone name="speaker" />
              </S.BotaoAcao>
              <S.BotaoAcao>
                <S.BotaoAcaoIcone name="heart" />
              </S.BotaoAcao>
              <S.BotaoAcao>
                <S.BotaoAcaoIcone name="play" color="LIGHTER" />
              </S.BotaoAcao>
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
