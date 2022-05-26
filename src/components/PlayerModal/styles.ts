import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(13 * 1.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(11)}px;
  line-height: ${RFValue(11 * 1.2)}px;
  letter-spacing: ${RFValue(1)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_400};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
  text-transform: uppercase;
`;

export const CenteredRow = styled.View`
  margin: 0 auto;
  width: 300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MusicTitle = styled.Text`
  font-size: ${RFValue(22)}px;
  line-height: ${RFValue(22 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const MusicArtist = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: ${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.GREY};
`;

export const MusicTime = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.2)}px;
  letter-spacing: ${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.GREY};
`;

export const Percent = styled.View`
  background: ${({ theme }) => theme.COLORS.GREY};
  width: 100%;
  height: 3px;
  border-radius: 3px;
  margin: 10px 0 4px;

  flex-direction: row;
  align-items: center;
`;

export const PercentBar = styled.View`
  background: ${({ theme }) => theme.COLORS.LIGHTER};
  width: 20%;
  height: 3px;
  border-radius: 3px;
`;

export const PercentBall = styled.View`
  background: ${({ theme }) => theme.COLORS.LIGHTER};
  width: 9px;
  height: 9px;
  border-radius: 9px;
  margin-left: -4.5px;
`;
