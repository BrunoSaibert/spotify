import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  width: 49%;
  height: ${RFValue(56)}px;

  margin-bottom: ${RFValue(8)}px;

  background-color: ${({ theme }) => theme.COLORS.DARK};
  border-radius: ${RFValue(4)}px;

  overflow: hidden;
`;

export const Imagem = styled(Image)`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Titulo = styled.Text`
  padding: ${RFValue(8)}px;

  align-items: center;
  justify-content: center;
  flex-shrink: 1;

  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.2)}px;
  letter-spacing: -0.3px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;
