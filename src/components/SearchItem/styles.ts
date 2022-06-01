import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 50%;
  padding: 8px;
`;

export const Button = styled(TouchableOpacity)<{ bgColor: string }>`
  flex-direction: row;

  width: 100%;
  height: 88px;
  border-radius: 4px;
  padding: 16px 10px;
  background-color: ${({ bgColor }) => bgColor};

  overflow: hidden;
  position: relative;
`;

export const Title = styled.Text`
  max-width: 60%;
  z-index: 99;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Image = styled.Image`
  width: 68px;
  height: 68px;

  position: absolute;
  right: -16px;
  bottom: -6px;

  transform: rotate(25deg);
`;
