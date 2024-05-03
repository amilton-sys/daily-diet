import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type ButtonStyleProps = {
  isFeedback?: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  width: ${({ isFeedback }) => isFeedback ? "200px" : "330px"};
  height: 50px;
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
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

export const Title = styled.Text`
  margin-left: 10px;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
