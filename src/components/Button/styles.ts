import styled, { css } from "styled-components/native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type ButtonStyleProps = {
  isFeedback?: boolean;
  isTrashButton?: boolean;
};

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  width: ${({ isFeedback }) => (isFeedback ? "200px" : "330px")};
  height: 50px;
  flex-direction: row;

  ${({ theme, isTrashButton }) =>
    isTrashButton &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_100};
    `};

  ${({ theme, isTrashButton }) =>
    !isTrashButton &&
    css`
      background-color: ${theme.COLORS.GRAY_200};
    `};
  border-radius: 6px;

  align-items: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;

export const IconTwo = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;

export const IconThree = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_100,
}))``;

export const Title = styled.Text<ButtonStyleProps>`
  margin-left: 10px;
  ${({ theme, isTrashButton }) => css`
    color: ${isTrashButton ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
