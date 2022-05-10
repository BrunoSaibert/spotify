import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  width: 49%;
  height: 56px;

  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK};
  border-radius: 4px;

  overflow: hidden;
`;

export const Imagem = styled(Image)`
  width: 56px;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Titulo = styled.Text`
  padding: 8px;

  align-items: center;
  justify-content: center;
  flex-shrink: 1;

  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.2)}px;
  letter-spacing: -0.3px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;
