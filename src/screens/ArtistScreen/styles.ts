import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

export const Wrapper = styled(LinearGradient)`
  flex: 1;
  position: relative;
`;

export const AnimatedHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px 8px 0;
  width: 100%;
  height: ${getStatusBarHeight() + (Platform.OS === "ios" ? 80 : 50)}px;
`;

export const AnimatedHeaderIcon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.COLORS.LIGHTER};
  font-size: 22px;
`;

export const AnimatedHeaderTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(30)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 400px;
  opacity: 0.9;

  position: absolute;
  top: 0;
  left: 0;
`;

export const ScrollContainer = styled.ScrollView`
  position: relative;
`;

export const Header = styled.View`
  justify-content: flex-end;
  width: 100%;
  height: 300px;
`;

export const HeaderTitle = styled.Text`
  padding: 8px 16px;

  font-size: ${RFValue(44)}px;
  line-height: ${RFValue(54)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const Container = styled.View`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.DARKER};
`;

export const Listeners = styled.Text`
  margin-top: 12px;
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.4)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_400};
  color: ${({ theme }) => theme.COLORS.GREY};
`;

export const Actions = styled.View`
  margin-top: 8px;

  height: 50px;

  flex-direction: row;
  align-items: center;
`;

export const ButtonFollow = styled.TouchableOpacity`
  margin-right: 16px;
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

export const LikedSongs = styled.View`
  margin-top: 16px;

  flex-direction: row;
  align-items: center;
`;

export const LikedSongsImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const LikedSongsTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16 * 1.2)}px;
  letter-spacing: -${RFValue(0.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};
`;

export const LikedSongsArtist = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.2)}px;
  letter-spacing: -${RFValue(0.2)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_400};
  color: ${({ theme }) => theme.COLORS.GREY};
`;

export const Section = styled.View`
  margin-top: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(20 * 1.2)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_700};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  margin-bottom: 8px;
`;

export const AboutImageBackground = styled.ImageBackground`
  width: 100%;
  height: 400px;
`;

export const AboutDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14 * 1.6)}px;
  letter-spacing: -${RFValue(0.6)}px;
  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS_600};
  color: ${({ theme }) => theme.COLORS.LIGHTER};

  padding: 16px;
  margin-bottom: 8px;
`;
