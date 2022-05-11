import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Image } from "react-native";

export const Container = styled.View`
  height: ${RFValue(64)}px;
  margin: ${RFValue(8)}px 0;

  flex-direction: row;
  align-items: center;
`;

export const Imagem = styled(Image)<{ round: number }>`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;

  border-radius: ${({ round }) => RFValue(round)}px;

  background-color: ${({ theme }) => theme.COLORS.LIGHTER};

  margin-right: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  letter-spacing: -0.3px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.GREY};

  letter-spacing: -0.3px;
`;
