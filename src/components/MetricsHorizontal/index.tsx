import { Container, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  subTitle: string;
};

export function MetricsHorizontal({ title, subTitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
