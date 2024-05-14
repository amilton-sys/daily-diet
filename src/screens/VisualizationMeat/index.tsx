import { HeaderMeat } from "@components/HeaderMeat";
import { Container } from "./styles";
import { VisualizationContent } from "@components/VisualizationContent";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { meatRemoveByName } from "@storage/meat/meatRemoveByName";
import { CustomAlert } from "@components/CustomAlert";

export function VisualizationMeat({ route }) {
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false);

  const { meat } = route.params;
  const [meats, setMeats] = useState({
    name: meat.name,
    description: meat.description,
    hour: meat.hour,
    date: meat.date,
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

  function handleShowAlert() {
    setShowAlert(true);
  }

  function handleCloseAlert() {
    setShowAlert(false);
  }

  function handleNavigateEdit() {
    navigation.navigate("edit", { meat: meat });
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
        dateAndHour={`${meats.date} às ${meats.hour}`}
        isLow={meats.isLow}
        onRemove={() => handleShowAlert()}
        onEdit={handleNavigateEdit}
      />
      <CustomAlert
        isVisible={showAlert}
        onClose={handleCloseAlert}
        onConfirm={() => handleRemoveMeat(meats.name)}
      />
    </Container>
  );
}
