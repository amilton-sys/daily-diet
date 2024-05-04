import { HeaderMeat } from "@components/HeaderMeat";
import { Container } from "./styles";
import { MeatContent } from "@components/MeatContent";

export function EditMeat() {
  return (
    <Container>
      <HeaderMeat isDefault title="Editar Refeição" />
      <MeatContent />
    </Container>
  );
}
