import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const TitleWrapper = styled.View`
  padding: 0 16px;
  margin-top: 70px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(24 * 1.2)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
`;
