import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isLow?: boolean;
};

export const Container = styled.View<FilterStyleProps>`
  width: 48%;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isLow }) =>
    isLow ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 6px;

  margin-bottom: 14px;
  padding: 15px;
`;

export const Title = styled.Text`
  margin-bottom: 5px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const SubTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SSM}px;
  `}
`;
