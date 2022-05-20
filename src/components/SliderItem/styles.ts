import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View<{ size: number }>`
  width: ${({ size }) => size}px;
`;

export const Image = styled.Image<{ size: number; round: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ round }) => round}px;
`;

export const Title = styled.Text<{ align: string }>`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  text-align: ${({ align }) => align};
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  margin-top: 8px;
`;

export const Description = styled.Text<{ align: string }>`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  text-align: ${({ align }) => align};
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.GREY};
`;
