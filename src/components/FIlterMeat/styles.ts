import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type InputStyleProps = {
  isActive?: boolean;
  isLow?: boolean;
};

export const Container = styled(TouchableOpacity)<InputStyleProps>`
  width: 160px;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${({ isActive, isLow, theme }) => isActive && css`
    background-color: ${isActive && !isLow ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border: 1px solid ${isActive && !isLow ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}

  ${({ isActive,theme }) => !isActive && css`
    background-color: ${theme.COLORS.GRAY_600};
  `}
  
  border-radius: 6px;
  margin-right:10px
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
  margin-right: 5px;
`;
