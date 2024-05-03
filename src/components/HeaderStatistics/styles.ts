import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type FilterStyleProps = {
  isLow?: boolean;
};

export const Container = styled.View<FilterStyleProps>`
  height: 200px;
  background-color: ${({ theme, isLow }) =>
    isLow ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
  justify-content: center;
`;

export const Button = styled(TouchableOpacity)``;

export const Icon = styled(ArrowLeft).attrs<FilterStyleProps>(
  ({ theme, isLow }) => ({
    size: 24,
    color: isLow ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
  })
)`
  margin-left: 10px;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SubTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SSM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
