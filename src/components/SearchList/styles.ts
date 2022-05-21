import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: 16px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16 * 1.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const List = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 8px;
  margin: -8px;
`;
