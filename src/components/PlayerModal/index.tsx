import React from "react";
import { Image, Modal, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components/native";

import { ButtonIcon } from "../ButtonIcon";
import { MusicDataProps } from "../PlayerHandle";

import * as S from "./styles";

export type PlayerModalProps = {
  data: MusicDataProps;
  visible: boolean;
  handleClose: () => void;
};

export function PlayerModal({ data, visible, handleClose }: PlayerModalProps) {
  const theme = useTheme();

  const windowHeight = Dimensions.get("window").height;

  return (
    <Modal animationType="slide" visible={visible} statusBarTranslucent>
      <LinearGradient
        colors={["#646464", theme.COLORS.DARKER]}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          flex: 1,
          paddingHorizontal: 8,
          justifyContent: "space-between",
        }}
      >
        <S.Header>
          <ButtonIcon
            name="chevron-down"
            onPress={handleClose}
            size={28}
            color="LIGHTER"
          />
          <View
            style={{
              alignItems: "center",
            }}
          >
            <S.SubTitle>Tocando da sua biblioteca</S.SubTitle>
            <S.Title>Músicas Curtidas</S.Title>
          </View>
          <ButtonIcon name="more-vertical" color="LIGHTER" />
        </S.Header>

        <S.CenteredRow style={{ justifyContent: "center" }}>
          <Image
            source={data.image}
            style={{
              height: (windowHeight - 42) / 2,
              width: (windowHeight - 42) / 2,
              maxHeight: 330,
              maxWidth: 330,
              marginVertical: 16,
            }}
            resizeMode={"contain"}
          />
        </S.CenteredRow>

        <View>
          <S.CenteredRow style={{ marginBottom: 16 }}>
            <View>
              <S.MusicTitle>{data.title}</S.MusicTitle>
              <S.MusicArtist>{data.artist}</S.MusicArtist>
            </View>

            <ButtonIcon
              name="heart"
              color="LIGHTER"
              style={{ marginRight: -12 }}
            />
          </S.CenteredRow>

          <S.CenteredRow>
            <S.Percent>
              <S.PercentBar />
              <S.PercentBall />
            </S.Percent>
          </S.CenteredRow>

          <S.CenteredRow>
            <S.MusicTime>{data.timer}</S.MusicTime>
            <S.MusicTime>{data.timerTotal}</S.MusicTime>
          </S.CenteredRow>

          <S.CenteredRow>
            <ButtonIcon
              name="shuffle"
              size={24}
              color="LIGHTER"
              style={{ marginLeft: -12 }}
            />
            <ButtonIcon name="skip-back" size={24} color="LIGHTER" />
            <ButtonIcon
              name="play"
              color="DARKER"
              size={32}
              style={{
                backgroundColor: "white",
                width: 68,
                height: 68,
                borderRadius: 68,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <ButtonIcon name="skip-forward" size={24} color="LIGHTER" />
            <ButtonIcon
              name="repeat"
              size={24}
              color="LIGHTER"
              style={{ marginRight: -12 }}
            />
          </S.CenteredRow>
        </View>

        <S.CenteredRow style={{ marginBottom: 60 }}>
          <ButtonIcon
            name="speaker"
            size={16}
            color="LIGHTER"
            style={{ marginLeft: -12 }}
          />
          <View style={{ flexDirection: "row" }}>
            <ButtonIcon name="share-2" size={16} color="LIGHTER" />
            <ButtonIcon
              name="menu"
              size={16}
              color="LIGHTER"
              style={{ marginRight: -12 }}
            />
          </View>
        </S.CenteredRow>
      </LinearGradient>
    </Modal>
  );
}