import { Header } from "@components/Header";
import { Container, Label, SectionHeader } from "./styles";
import { PercenteCard } from "@components/PercentCard";
import { Button } from "@components/Button";
import { MeatCard } from "@components/MeatCard";
import { SectionList } from "react-native";

const DATA = [
  {
    date: "12.08.22",
    data: [
      {
        hour: "20:00",
        title: "X tudo",
        isLow: true,
      },
      {
        hour: "21:00",
        title: "Salada",
        isLow: false,
      },
    ],
  },
  {
    date: "11.08.22",
    data: [
      {
        hour: "20:00",
        title: "Carne Branca",
        isLow: false,
      },
      {
        hour: "21:00",
        title: "Pizza",
        isLow: true,
      },
    ],
  },
];

export function Home() {
  return (
    <Container>
      <Header />
      <PercenteCard title="90,86%" subTitle="das refeições dentro da dieta" />
      <Label>Refeições</Label>
      <Button title="Nova refeição" />
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <MeatCard hour={item.hour} title={item.title} isLow={item.isLow} />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <SectionHeader>{date}</SectionHeader>
        )}
      />
    </Container>
  );
}
