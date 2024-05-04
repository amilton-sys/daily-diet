import styled, { css } from "styled-components/native";
import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type InputStyleProps = {
  isLow?: boolean;
};

export const Container = styled.View`
  height: 700px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 25px;
  align-items: flex-start;
  padding: 24px;
`;

export const Title = styled.Text`
  margin-bottom: 10px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SubTitle = styled.Text`
  margin-bottom: 15px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Button = styled.View<InputStyleProps>`
  width: 170px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${({ isLow, theme }) =>
    isLow &&
    css`
      background-color: ${isLow
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
      border: 1px solid
        ${isLow ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `}

  ${({ isLow, theme }) =>
    !isLow &&
    css`
      background-color: ${theme.COLORS.GRAY_600};
    `}
  
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 300px;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Icon = styled(Circle).attrs<InputStyleProps>(
  ({ theme, isLow }) => ({
    size: 14,
    color: isLow ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
    weight: "fill",
  })
)`
  margin-right: 10px;
`;
