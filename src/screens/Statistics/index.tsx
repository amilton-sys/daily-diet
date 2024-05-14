import { HeaderStatistics } from "@components/HeaderStatistics";
import { Container } from "./styles";
import { StatisticContent } from "@components/StatisticContent";
import { meatsGetAll } from "@storage/meat/meatsGetAll";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";

export function Statistics() {
  const [statistics, setStatistics] = useState<any>({
    greatSequence: 0,
    totalSequence: 0,
    meatIn: 0,
    meatOut: 0,
  });
  const [isLow, setIsLow] = useState<boolean>(false);
  const [mediana, setMediana] = useState("");
  async function fetchStatistics() {
    try {
      const storage = await meatsGetAll();
      const totalSequence = storage.length;
      const greatSequence = storage.filter(
        (meat) =>
          !meat.isLow && meat.date === storage[storage.length - 1].date
      ).length;
      const meatIn = storage.filter((meat) => meat.isLow === false).length;
      const meatOut = storage.filter((meat) => meat.isLow).length;
      const media =
        meatIn > 0 ? ((meatIn / totalSequence) * 100).toFixed(2) : 0;
      setMediana(String(media));
      const medians = media > 60 ? false : true;
      setIsLow(medians);
      setStatistics({
        greatSequence,
        totalSequence,
        meatIn,
        meatOut,
      });
    } catch (error) {
      throw error;
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, [])
  );

  return (
    <Container>
      <HeaderStatistics
          title={`${mediana}%`}
          subTitle="das refeições dentro da dieta"
          isLow={isLow}
        />
      <StatisticContent
        greatSequence={statistics.greatSequence}
        totalSequence={statistics.totalSequence}
        meatIn={statistics.meatIn}
        meatOut={statistics.meatOut}
        isLow
      />
    </Container>
  );
}
