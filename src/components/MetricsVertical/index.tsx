import { Container, SubTitle, Title, FilterStyleProps } from "./styles";

type Props = FilterStyleProps &{
  title: string;
  subTitle: string;
};

export function MetricsVertical({ title, subTitle, isLow = false }: Props) {
  return (
    <Container isLow={isLow}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
