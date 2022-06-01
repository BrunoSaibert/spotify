import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  width: 100%;
  height: 100px;
  padding: 8px;

  justify-content: flex-end;

  position: absolute;
  bottom: ${getBottomSpace() + 50}px;
  left: 0px;
`;

export const Player = styled.View`
  width: 100%;
  height: 60px;

  padding: 0 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 42px;
  height: 42px;

  border-radius: 4px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_400};
  color: ${({ theme }) => theme.COLORS.GREY};
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Percent = styled.View`
  background: ${({ theme }) => theme.COLORS.GREY};
  width: 94%;
  height: 2px;
  border-radius: 2px;
  margin: -2px auto 0;
`;

export const PercentBar = styled.View`
  background: ${({ theme }) => theme.COLORS.LIGHTER};
  width: 30%;
  height: 2px;
  border-radius: 2px;
`;
