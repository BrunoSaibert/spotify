import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  padding: 8px 0;
`;

export const Position = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  padding: 6px;
`;

export const Image = styled.Image`
  width: 48px;
  height: 48px;

  margin-left: 12px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16 * 1.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_400};
  color: ${({ theme }) => theme.COLORS.GREY};
`;
