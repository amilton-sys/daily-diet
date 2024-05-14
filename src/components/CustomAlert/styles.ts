import styled, { css } from "styled-components/native";

export type ButtonStyleProps = {
  buttonCancel?: boolean;
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ModalView = styled.View`
  margin: 15px;
  background-color: white;
  border-radius: 15px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  shadow-color: ${({ theme }) => theme.COLORS.GRAY_100};
  elevation: 5;
`;

export const Message = styled.Text`
  margin-bottom: 20px;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Button = styled.TouchableHighlight<ButtonStyleProps>`
  ${({ theme, buttonCancel }) =>
    buttonCancel &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_100};
    `};
  ${({ theme, buttonCancel }) =>
    !buttonCancel &&
    css`
      background-color: ${theme.COLORS.GRAY_100};
    `};

  width: 140px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text<ButtonStyleProps>`
  ${({ theme, buttonCancel }) => css`
    color: ${buttonCancel ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
