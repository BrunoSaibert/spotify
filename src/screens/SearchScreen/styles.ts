import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.ScrollView`
  padding: 0 ${RFValue(16)}px;
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
  padding: ${RFValue(32)}px 0 ${RFValue(8)}px;
`;

export const SearchInput = styled.View`
  background-color: ${({ theme }) => theme.COLORS.LIGHTER};

  width: 100%;
  height: ${RFValue(50)}px;

  padding: ${RFValue(8)}px ${RFValue(16)}px;
  margin: 0 auto;

  border-radius: ${RFValue(6)}px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  margin-left: ${RFValue(8)}px;
  color: ${({ theme }) => theme.COLORS.DARK};
`;

export const InputIcon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: ${RFValue(24)}px;
`;
