import { Header } from "@components/Header";
import { Container, Label, SectionHeader } from "./styles";
import { PercenteCard } from "@components/PercentCard";
import { Button } from "@components/Button";
import { MeatCard } from "@components/MeatCard";
import { SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { meatsGetAll } from "@storage/meat/meatsGetAll";

export function Home() {
  const [isLow, setIsLow] = useState<boolean>(false);
  const [mediana, setMediana] = useState("");
  const [meats, setMeats] = useState<any[]>([]);
  const navigation = useNavigation();

  function handleNewMeat() {
    navigation.navigate("new");
  }

  function handleStatistics() {
    navigation.navigate("statistic");
  }

  async function fetchMeats() {
    try {
      const storedMeats = await meatsGetAll();
      const meatIn = storedMeats.filter((meat) => meat.isLow === false).length;
      const media =
        meatIn > 0 ? ((meatIn / storedMeats.length) * 100).toFixed(2) : 0;
      const medians = media > 60 ? false : true;
      setIsLow(medians);
      setMediana(String(media));

      // Agrupa as refeições por data
      const groupedMeats = {};
      storedMeats.forEach((meat) => {
        if (!groupedMeats[meat.date]) {
          groupedMeats[meat.date] = [];
        }
        meat.isLow = Boolean(meat.isLow);
        groupedMeats[meat.date].push(meat);
      });

      // Transforma o objeto em um array de seções
      const sections = Object.keys(groupedMeats).map((date) => ({
        title: date.replace("/",".").replace("/","."),
        data: groupedMeats[date],
      }));

      setMeats(sections);
    } catch (error) {
      throw error;
    }
  }

  function handleEditMeat(item:string[]){
    navigation.navigate("visualization", { meat: item});
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeats();
    }, [])
  );

  return (
    <Container>
      <Header />
      <PercenteCard
        onPress={handleStatistics}
        title={`${mediana}%`}
        subTitle="das refeições dentro da dieta"
        isLow={isLow}
      />
      <Label>Refeições</Label>
      <Button showIcon title="Nova refeição" onPress={handleNewMeat} />
      <SectionList
        sections={meats || []}
        keyExtractor={(item) => item.hour}
        renderItem={({ item }) => (
          <MeatCard hour={item.hour} title={item.name} isLow={item.isLow} onPress={() => handleEditMeat(item)} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>{title}</SectionHeader>
        )}
      />
    </Container>
  );
}
