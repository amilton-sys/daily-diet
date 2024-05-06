import { Modal, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleProps = {
  isYes?: boolean;
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 330px;
  height: 200px;
  border-radius: 15px;
  padding: 15px;
`;

export const ShowAlert = styled(Modal)``;

export const Title = styled.Text`
  margin-top: 20px;
  text-align: center;
  flex: 1;
  margin-bottom: 15px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Button = styled(TouchableOpacity)<ButtonStyleProps>`
  width: 135px;
  height: 50px;
  justify-content: center;
  align-items: center;
  ${({ theme, isYes }) =>
    isYes &&
    css`
      background-color:${theme.COLORS.GRAY_200};
    `}
  ${({ theme, isYes }) =>
    !isYes &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_100};
    `}
  border-radius: 6px;
`;

export const ButtonText = styled.Text<ButtonStyleProps>`
  ${({ theme, isYes }) =>
    isYes &&
    css`
      color: ${theme.COLORS.WHITE};
    `}
`;
