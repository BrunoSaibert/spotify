import React, { ReactNode, useState } from "react";
import { Pressable, Text, View, Modal, Image, Dimensions } from "react-native";
import { useTheme } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import image from "../../assets/images/portugal_the_man.jpg";
import { ButtonIcon } from "../ButtonIcon";

import * as S from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  children: ReactNode;
};

export function Player({ children }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  const { width } = Dimensions.get("window");
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
            <ButtonIcon name="more-vertical" />
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

              <ButtonIcon name="heart" />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 20,
              }}
            >
              <S.PercentBar>
                <S.Percent />
              </S.PercentBar>
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
              <ButtonIcon name="shuffle" size={24} />
              <ButtonIcon name="skip-back" size={24} />
              <ButtonIcon
                name="pause"
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
              <ButtonIcon name="skip-forward" size={24} />
              <ButtonIcon name="repeat" size={24} />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 20,
              }}
            >
              <ButtonIcon name="speaker" size={16} />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ButtonIcon name="share-2" size={16} />
                <ButtonIcon name="menu" size={16} />
              </View>
            </View>
          </View>
        </LinearGradient>
      </Modal>
    </>
  );
}
