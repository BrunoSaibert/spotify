import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: 68px;
  margin: 8px 0;

  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image<{ round: number }>`
  width: 68px;
  height: 68px;
  border-radius: ${({ round }) => round}px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  flex-shrink: 1;

  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16 * 1.2)}px;
  letter-spacing: -${RFValue(0.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Description = styled.Text`
  flex-shrink: 1;

  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.GREY};
`;
