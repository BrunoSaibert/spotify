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
  padding: 96px 16px 24px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(18 * 1.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const PodcastImage = styled.Image`
  width: 176px;
  height: 176px;
  border-radius: 12px;
  margin-right: 16px;
`;

export const PodcastTitle = styled.Text<{ length: number }>`
  font-size: ${({ length }) => RFValue(length > 30 ? 18 : 36)}px;
  line-height: ${({ length }) => RFValue((length > 30 ? 18 : 36) * 1.2)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
  margin-bottom: 12px;
`;

export const PodcastAuthor = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Content = styled.View`
  padding: 0 16px;
`;

export const ButtonFollow = styled.TouchableOpacity`
  margin-right: 12px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GREY};
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const ButtonFollowText = styled.Text`
  padding: 6px 12px;

  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_400};
  color: ${({ theme }) => theme.COLORS.GREY};
  margin-bottom: 20px;
`;

export const ButtonTag = styled.TouchableOpacity`
  margin-right: 12px;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  border-radius: 16px;

  align-items: center;
  justify-content: center;
`;

export const ButtonTagText = styled.Text`
  align-items: center;

  padding: 8px 20px;

  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Filter = styled.View`
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.DARKER};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FilterTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16 * 1.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
  margin: 20px 0;
`;

export const ButtonFilter = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.DARK};
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const ButtonFilterText = styled.Text`
  padding: 8px 20px;

  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.GREY};
`;

export const EpisodeImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  margin-right: 16px;
`;

export const EpisodeTitle = styled.Text`
  flex-shrink: 1;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const EpisodeDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12 * 1.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_400};
  color: ${({ theme }) => theme.COLORS.GREY};
  margin-top: 12px;
`;
