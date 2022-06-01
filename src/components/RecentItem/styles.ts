import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 50%;
  padding: 4px;
`;

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 60px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.DARK};
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Title = styled.Text`
  flex-shrink: 1;
  align-items: center;
  justify-content: center;

  padding: 8px;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;
