import { HeaderMeat } from "@components/HeaderMeat";
import { Container } from "./styles";
import { MeatContent } from "@components/MeatContent";
import { Alert } from "@components/Alert";

export function NewMeat() {
  return (
    <Container>
      <HeaderMeat isDefault title="Nova refeição" />
      <MeatContent />
    </Container>
  );
}
