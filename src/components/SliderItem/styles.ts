import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Image } from "react-native";

export const Container = styled.View<{ size: number }>`
  width: ${({ size }) => RFValue(size)}px;
`;

export const Imagem = styled(Image)<{ size: number; round: number }>`
  width: ${({ size }) => RFValue(size)}px;
  height: ${({ size }) => RFValue(size)}px;

  border-radius: ${({ round }) => RFValue(round)}px;

  background-color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Title = styled.Text<{ align: string }>`
  font-size: ${RFValue(11)}px;
  line-height: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  text-align: ${({ align }) => align};

  letter-spacing: -0.3px;

  margin-top: ${RFValue(8)}px;
`;

export const Description = styled.Text<{ align: string }>`
  font-size: ${RFValue(11)}px;
  line-height: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.GREY};

  text-align: ${({ align }) => align};

  letter-spacing: -0.3px;

  margin: ${RFValue(4)}px 0;
`;
