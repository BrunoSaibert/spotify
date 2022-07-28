import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  background-color: ${({ theme }) => theme.COLORS.DARKER};
`;

export const Content = styled.View`
  align-items: center;
  padding-bottom: 36px;
  max-width: 320px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16 * 1.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
  text-align: center;

  margin-top: 16px;
  margin-bottom: 50px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 6px 18px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GREY};
  border-radius: 32px;
  min-height: 40px;
`;

export const ButtonIcon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.COLORS.LIGHTER};
  font-size: 22px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
  text-align: center;
  padding: 0 20px;
`;
