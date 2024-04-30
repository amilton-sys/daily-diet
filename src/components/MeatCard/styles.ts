import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Circle } from "phosphor-react-native";

export type FilterStyleProps = {
    isLow?: boolean;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  margin-top: 10px;
  padding-left: 10px;
`;

export const Form = styled.View`
  flex-direction: row;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Pipe = styled.Text`
  margin-left: 5px;
  margin-right: 5px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.SSM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(Circle).attrs<FilterStyleProps>(({ theme, isLow }) => ({
    size: 14,
    color: isLow ? theme.COLORS.RED_MID : theme.COLORS.GREEN_MID,
    weight:'fill'
}))`
    margin-right: 15px;
`;
