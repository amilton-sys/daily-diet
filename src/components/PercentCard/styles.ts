import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 100px;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 6px;
  margin-top: 30px;
`;

export const FormRight = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK,
}))`
    position: absolute;
    right: 10px;
    top: 10px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
