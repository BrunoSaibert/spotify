import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../styles/theme";

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 100px;
  padding: 8px;

  justify-content: flex-end;

  position: absolute;
  bottom: 56px;
  left: 0px;
`;

export const Player = styled.View`
  width: 100%;
  height: 60px;

  padding: 0 8px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK};
`;

export const Imagem = styled.Image`
  width: 42px;
  height: 42px;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.COLORS.LIGHTER};

  margin-right: 12px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.GREY};
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const BotaoAcao = styled.TouchableOpacity`
  margin: 0 8px;
`;

export const BotaoAcaoIcone = styled(Feather)<{
  color?: keyof typeof theme.COLORS;
}>`
  color: ${({ theme, color }) =>
    color ? theme.COLORS[color] : theme.COLORS.GREY};
  font-size: ${RFValue(22)}px;
`;

export const PercentBar = styled.ScrollView`
  background: ${({ theme }) => theme.COLORS.GREY};
  width: 94%;
  height: 2px;
  border-radius: 2px;
  margin: -2px auto 0;
`;

export const Percent = styled.ScrollView`
  background: ${({ theme }) => theme.COLORS.LIGHTER};
  width: 30%;
  height: 2px;
  border-radius: 2px;
`;
