import { LinearGradient } from "expo-linear-gradient";
import { Animated, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const AnimatedHeader = styled(Animated.View)`
  flex-direction: row;
  align-items: flex-end;

  padding-bottom: 8px;

  width: 100%;
  height: ${getStatusBarHeight() + (Platform.OS === "ios" ? 80 : 50)}px;
  background-color: ${({ theme }) => theme.COLORS.DARK};
`;

export const Header = styled(LinearGradient)`
  padding: 0 16px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(18 * 1.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const PlaylistImage = styled(Animated.Image)`
  margin: 48px auto 16px;
  width: 240px;
  height: 240px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_400};
  color: ${({ theme }) => theme.COLORS.GREY};
  margin-bottom: 8px;
`;

export const AuthorImage = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER};
  margin-right: 8px;
`;

export const AuthorName = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const LikesAmount = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_400};
  color: ${({ theme }) => theme.COLORS.GREY};
  margin-top: 8px;
`;

export const AlbumImage = styled.Image`
  width: 52px;
  height: 52px;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER};
  margin-right: 12px;
`;

export const Content = styled.View`
  padding: 0 16px;
`;

export const TrackTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const TrackArtist = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_400};
  color: ${({ theme }) => theme.COLORS.GREY};
`;
