import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import theme from "../../styles/theme";

export const Button = styled.TouchableOpacity`
  padding: 0 12px;
`;

export const Icon = styled(Feather)<{
  size: number;
  color: keyof typeof theme.COLORS;
}>`
  color: ${({ theme, color }) => theme.COLORS[color]};
  font-size: ${({ size }) => RFValue(size ?? 22)}px;
`;
