import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../styles/theme";

export const Button = styled.TouchableOpacity`
  padding: 0 8px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(MaterialCommunityIcons)<{
  size?: number;
  color: keyof typeof theme.COLORS;
}>`
  color: ${({ theme, color }) => theme.COLORS[color]};
  font-size: ${({ size }) => size ?? 22}px;
`;

export const Text = styled.Text<{
  size?: number;
  color: keyof typeof theme.COLORS;
}>`
  color: ${({ theme, color }) => theme.COLORS[color]};
  font-size: ${({ size }) => RFValue(size ?? 22)}px;
  line-height: ${({ size }) => RFValue((size ?? 22) * 1.2)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  margin-left: 12px;
`;
