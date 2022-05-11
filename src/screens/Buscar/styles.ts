import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.ScrollView`
  padding: 0 16px;
`;

export const Title = styled.Text`
  margin-top: ${getStatusBarHeight() + RFValue(48)}px;

  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  letter-spacing: -0.3px;
`;

export const SearchInputWrapper = styled.View`
  background-color: ${({ theme }) => theme.COLORS.DARKER};
  padding: 32px 0 8px;
`;

export const SearchInput = styled.View`
  background-color: ${({ theme }) => theme.COLORS.LIGHTER};

  width: 100%;
  height: 50px;

  padding: 8px 16px;
  margin: 0 auto;

  border-radius: 6px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  margin-left: 8px;
  color: ${({ theme }) => theme.COLORS.DARK};
`;
