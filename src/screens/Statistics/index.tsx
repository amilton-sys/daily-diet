import { HeaderStatistics } from "@components/HeaderStatistics";
import { Container } from "./styles";
import { StatisticContent } from "@components/StatisticContent";

export function Statistics() {
  return (
    <Container>
      <HeaderStatistics
        title="90,86%"
        subTitle="das refeições dentro da dieta"
        isLow
      />
      <StatisticContent />
    </Container>
  );
}
