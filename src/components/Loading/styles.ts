import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;


export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
}))``;