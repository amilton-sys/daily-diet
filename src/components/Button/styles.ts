import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;

  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;

export const Title = styled.Text`
  text-align: center;
  margin-left: 10px;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
