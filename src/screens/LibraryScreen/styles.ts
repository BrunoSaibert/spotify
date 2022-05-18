import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  padding: 0 ${RFValue(16)}px;
`;

export const TitleWrapper = styled.View`
  padding: ${RFValue(70)}px 0 ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.COLORS.DARKER};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;

  border-radius: ${RFValue(32)}px;

  background-color: ${({ theme }) => theme.COLORS.LIGHTER};

  margin-right: ${RFValue(8)}px;
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
