import { HeaderMeat } from "@components/HeaderMeat";
import { Container } from "./styles";
import { MeatContent } from "@components/MeatContent";

export function NewMeat() {
  return (
    <Container>
      <HeaderMeat title="Nova refeição" />
      <MeatContent />
    </Container>
  );
}
