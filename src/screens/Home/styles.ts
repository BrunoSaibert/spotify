import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View``;

export const Header = styled(LinearGradient)``;

export const TituloWrapper = styled.View`
  padding: 0 16px;
  margin-top: ${RFValue(70)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Titulo = styled.Text`
  font-size: ${RFValue(22)}px;
  line-height: ${RFValue(22 * 1.2)}px;
  letter-spacing: -0.3px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const BotaoAcaoWrapper = styled.View`
  flex-direction: row;
`;

export const BotaoAcao = styled.TouchableOpacity`
  margin-left: 24px;
`;

export const BotaoAcaoIcone = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.LIGHTER};
  font-size: ${RFValue(22)}px;
`;
