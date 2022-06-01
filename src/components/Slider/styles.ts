import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  line-height: ${RFValue(22 * 1.2)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  margin-left: 16px;
  margin-bottom: 16px;
`;

export const Slider = styled(FlatList)`
  padding-left: 16px;
`;
