import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin: ${RFValue(20)}px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(27)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  letter-spacing: -0.3px;

  margin-left: ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Slider = styled(FlatList)`
  padding-left: ${RFValue(16)}px;
`;
