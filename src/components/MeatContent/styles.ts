import { TextInput, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type InputStyleProps = {
  textArea?: boolean;
  date?: boolean;
};

export const Container = styled.View`
  height: 700px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 25px;
  padding: 24px;
`;

export const Label = styled.Text`
  margin-top: 15px;
  margin-bottom: 5px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SSM}px;
  `}
`;

export const Input = styled(TextInput)<InputStyleProps>`
  width: ${({ date }) => (date ? "160px" : "100%")};
  height: ${({ textArea }) => (textArea ? "120px" : "50px")};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const FormDate = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Form = styled.View``;
