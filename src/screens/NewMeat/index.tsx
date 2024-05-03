import { HeaderNewMeat } from "@components/HeaderMeat";
import { Container } from "./styles";
import { MeatContent } from "@components/MeatContent";

export function NewMeat() {
  return (
    <Container>
      <HeaderNewMeat title="Nova refeição" />
      <MeatContent />
    </Container>
  );
}
