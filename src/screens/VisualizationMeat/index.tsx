import { HeaderMeat } from "@components/HeaderMeat";
import { Container } from "./styles";
import { VisualizationContent } from "@components/VisualizationContent";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { meatRemoveByName } from "@storage/meat/meatRemoveByName";
import { Alert } from "react-native";

export function VisualizationMeat({ route }) {
  const navigation = useNavigation();

  const { meat } = route.params;
  const [meats, setMeats] = useState({
    name: meat.name,
    description: meat.description,
    hour: meat.hour,
    isLow: meat.isLow,
  });

  function handleHomeClick() {
    navigation.navigate("home");
  }

  async function handleRemoveMeat(name: string) {
    try {
      await meatRemoveByName(name);
      navigation.navigate("home");
    } catch (error) {
      throw error;
    }
  }

  async function handleMeatRemove(name: string) {
    Alert.alert("Remover", "Deseja essa comida?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => handleRemoveMeat(name) },
    ]);
  }

  return (
    <Container>
      <HeaderMeat
        onPress={handleHomeClick}
        title="Refeição"
        isLow={meats.isLow}
      />
      <VisualizationContent
        title={meats.name}
        subTitle={meats.description}
        dateAndHour={meats.hour}
        isLow={meats.isLow}
        onRemove={() => handleMeatRemove(meats.name)}
      />
    </Container>
  );
}
