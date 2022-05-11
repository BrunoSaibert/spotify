import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View<{ bgColor: string }>`
  width: 48%;
  height: ${RFValue(88)}px;

  background-color: ${({ bgColor }) => bgColor};

  border-radius: ${RFValue(4)}px;

  overflow: hidden;

  padding: ${RFValue(16)}px ${RFValue(10)}px;
  margin-top: ${RFValue(16)}px;

  position: relative;
`;

export const Title = styled.Text`
  max-width: 60%;

  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  letter-spacing: -0.3px;
`;

export const Image = styled.Image`
  width: ${RFValue(68)}px;
  height: ${RFValue(68)}px;

  position: absolute;
  right: -16px;
  bottom: -6px;

  transform: rotate(30deg);

  elevation: 3;
`;
