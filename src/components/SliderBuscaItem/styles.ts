import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View<{ bgColor: string }>`
  width: 48%;
  height: 88px;

  background-color: ${({ bgColor }) => bgColor};

  border-radius: 4px;

  overflow: hidden;

  padding: 16px 10px;
  margin-top: 16px;

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
  width: 68px;
  height: 68px;

  position: absolute;
  right: -16px;
  bottom: -6px;

  transform: rotate(30deg);

  elevation: 3;
`;
