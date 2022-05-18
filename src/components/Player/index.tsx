import React, { ReactNode, useState } from "react";
import { Pressable, Text, View, Modal, Image } from "react-native";
import { useTheme } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";

import image from "../../assets/images/portugal_the_man.jpg";
import { ButtonIcon } from "../ButtonIcon";

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

      <Modal animationType="slide" visible={modalVisible} statusBarTranslucent>
        <LinearGradient
          colors={["#646464", theme.COLORS.DARKER]}
          start={[0, 0]}
          end={[0, 1]}
          style={{
            flex: 1,
            paddingHorizontal: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: 40,
            }}
          >
            <ButtonIcon
              name="chevron-down"
              onPress={() => setModalVisible(false)}
              size={28}
              color="LIGHTER"
            />
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: theme.COLORS.LIGHTER, fontSize: RFValue(11) }}
              >
                Tocando da sua biblioteca
              </Text>
              <Text
                style={{
                  color: theme.COLORS.LIGHTER,
                  fontSize: RFValue(13),
                  fontWeight: "bold",
                }}
              >
                Músicas Curtidas
              </Text>
            </View>
            <ButtonIcon name="more-vertical" color="LIGHTER" />
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={image}
              style={{
                height: 330,
                width: null,
                aspectRatio: 1,
              }}
              resizeMode={"contain"}
            />
          </View>

          <View
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: 330,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 40,
              }}
            >
              <View>
                <Text
                  style={{
                    color: theme.COLORS.LIGHTER,
                    fontSize: RFValue(22),
                    fontWeight: "bold",
                  }}
                >
                  Hip Hop Kids
                </Text>
                <Text
                  style={{
                    color: theme.COLORS.GREY,
                    fontSize: RFValue(14),
                    fontWeight: "bold",
                  }}
                >
                  Portugal, The Man
                </Text>
              </View>

              <ButtonIcon name="heart" color="LIGHTER" />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 20,
              }}
            >
              <S.Percent>
                <S.PercentBar />
              </S.Percent>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 4,
              }}
            >
              <Text
                style={{
                  color: theme.COLORS.GREY,
                  fontSize: RFValue(12),
                }}
              >
                0:49
              </Text>
              <Text
                style={{
                  color: theme.COLORS.GREY,
                  fontSize: RFValue(12),
                }}
              >
                3:27
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
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
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 20,
              }}
            >
              <ButtonIcon name="speaker" size={16} color="LIGHTER" />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ButtonIcon name="share-2" size={16} color="LIGHTER" />
                <ButtonIcon name="menu" size={16} color="LIGHTER" />
              </View>
            </View>
          </View>
        </LinearGradient>
      </Modal>
    </>
  );
}
