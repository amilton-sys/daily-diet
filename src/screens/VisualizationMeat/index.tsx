import { HeaderMeat } from "@components/HeaderMeat";
import { Container } from "./styles";
import { VisualizationContent } from "@components/VisualizationContent";

export function VisualizationMeat() {
  return (
    <Container>
      <HeaderMeat title="Refeição" />
      <VisualizationContent title={""} subTitle={""} dateAndHour={""} />
    </Container>
  );
}
