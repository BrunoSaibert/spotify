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
  font-size: ${RFValue(22)}px;
  line-height: ${RFValue(22 * 1.2)}px;
  letter-spacing: -0.3px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
`;