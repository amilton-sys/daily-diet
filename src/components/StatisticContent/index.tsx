import { MetricsHorizontal } from "@components/MetricsHorizontal";
import { Container, FormDown, Label } from "./styles";
import { MetricsVertical } from "@components/MetricsVertical";

export function StatisticContent() {
  return (
    <Container>
      <Label>Estatísticas gerais</Label>
      <MetricsHorizontal
        title="4"
        subTitle="melhor sequência de pratos dentro da dieta"
      />
      <MetricsHorizontal title="109" subTitle="refeições registradas" />
      <FormDown>
        <MetricsVertical title="77" subTitle="refeições dentro da dieta" isLow />
        <MetricsVertical title="32" subTitle="refeições fora da dieta" />
      </FormDown>
    </Container>
  );
}
