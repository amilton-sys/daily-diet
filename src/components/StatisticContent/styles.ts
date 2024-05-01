import styled, { css } from "styled-components/native";

export const Container = styled.View`
  height: 700px;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 25px;

  padding: 24px;
`;

export const FormDown = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  margin-top: 15px;
  margin-bottom: 30px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;


