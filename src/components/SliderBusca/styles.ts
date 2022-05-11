import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native";

export const Container = styled.View`
  padding: ${RFValue(8)}px 0 ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  letter-spacing: -0.3px;
`;

export const List = styled(FlatList)``;
