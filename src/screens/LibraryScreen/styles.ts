import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView``;

export const Header = styled.View`
  padding: 70px 0 8px;
  background-color: ${({ theme }) => theme.COLORS.DARKER};

  shadow-color: #000;
  shadow-offset: 0px 5px;
  shadow-radius: 6.27px;

  elevation: 10;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 24px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.DARKER};
  z-index: 1;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 34px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(20 * 1.2)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
`;

export const FilterButtonWrapper = styled.ScrollView`
  flex-direction: row;
`;

export const FilterButton = styled.TouchableOpacity`
  margin-right: 8px;
  padding: 2px 18px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GREY};
  border-radius: 32px;
`;

export const FilterButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Content = styled.View`
  margin-top: 16px;
  padding: 0 16px;
`;
