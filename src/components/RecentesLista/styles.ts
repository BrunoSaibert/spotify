import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(FlatList)`
  padding: ${RFValue(16)}px;
`;
