import { MetricsHorizontal } from "@components/MetricsHorizontal";
import { Container, FormDown, Label } from "./styles";
import { MetricsVertical } from "@components/MetricsVertical";

type Props = {
  greatSequence: string;
  totalSequence: string;
  meatOut: string;
  meatIn: string;
  isLow: boolean;
};

export function StatisticContent({
  greatSequence,
  isLow,
  meatIn,
  meatOut,
  totalSequence,
}: Props) {
  return (
    <Container>
      <Label>Estatísticas gerais</Label>
      <MetricsHorizontal
        title={greatSequence}
        subTitle="melhor sequência de pratos dentro da dieta"
      />
      <MetricsHorizontal title={totalSequence} subTitle="refeições registradas" />
      <FormDown>
        <MetricsVertical
          title={meatIn}
          subTitle="refeições dentro da dieta"
          isLow={isLow}
        />
        <MetricsVertical title={meatOut} subTitle="refeições fora da dieta" />
      </FormDown>
    </Container>
  );
}
