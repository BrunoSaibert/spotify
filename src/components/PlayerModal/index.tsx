import React from "react";
import { Image, Modal, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "styled-components/native";

import { ButtonIcon } from "../ButtonIcon";

import image from "../../assets/images/portugal_the_man.jpg";

import * as S from "./styles";

export type PlayerModalProps = {
  visible: boolean;
  handleClose: () => void;
};

export function PlayerModal({ visible, handleClose }: PlayerModalProps) {
  const theme = useTheme();

  return (
    <Modal animationType="slide" visible={visible} statusBarTranslucent>
      <LinearGradient
        colors={["#646464", theme.COLORS.DARKER]}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          flex: 1,
          paddingHorizontal: 8,
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
            source={image}
            style={{
              height: 330,
              width: 330,
            }}
            resizeMode={"contain"}
          />
        </S.CenteredRow>

        <S.Content>
          <S.CenteredRow>
            <View>
              <S.MusicTitle>Hip Hop Kids</S.MusicTitle>
              <S.MusicArtist>Portugal, The Man</S.MusicArtist>
            </View>

            <ButtonIcon
              name="heart"
              color="LIGHTER"
              style={{ marginRight: -12 }}
            />
          </S.CenteredRow>

          <S.Percent>
            <S.PercentBar />
            <S.PercentBall />
          </S.Percent>

          <S.CenteredRow>
            <S.MusicTime>0:49</S.MusicTime>
            <S.MusicTime>3:27</S.MusicTime>
          </S.CenteredRow>

          <S.CenteredRow style={{ marginHorizontal: -12 }}>
            <ButtonIcon name="shuffle" size={24} color="LIGHTER" />
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
            <ButtonIcon name="repeat" size={24} color="LIGHTER" />
          </S.CenteredRow>

          <S.ShareWrapper>
            <ButtonIcon name="speaker" size={16} color="LIGHTER" />
            <S.CenteredRow>
              <ButtonIcon name="share-2" size={16} color="LIGHTER" />
              <ButtonIcon name="menu" size={16} color="LIGHTER" />
            </S.CenteredRow>
          </S.ShareWrapper>
        </S.Content>
      </LinearGradient>
    </Modal>
  );
}
