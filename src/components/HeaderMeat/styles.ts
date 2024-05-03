import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Button = styled(TouchableOpacity)``;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  right: 90px;
  position: absolute;
`;

export const Title = styled.Text`
  margin-top: 20px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
