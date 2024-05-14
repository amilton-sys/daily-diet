import { HeaderMeat } from "@components/HeaderMeat";
import { Container } from "./styles";
import { MeatContent } from "@components/MeatContent";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { MeatEditByName } from "@storage/meat/meatEditByName";
import { meatsGetAll } from "@storage/meat/meatsGetAll";

export function EditMeat({ route }) {
  const navigation = useNavigation();
  const { meat } = route.params;
  const [option, setOption] = useState(meat.isLow ? "Não" : "Sim");
  const [formData, setFormData] = useState(meat);

  function handleNavigationClick() {
    navigation.goBack();
  }

  const handleChangeText = (name: any, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFilterChange = (value: string) => {
    setOption(value);
    setFormData({
      ...formData,
      isLow: value === "Sim" ? false : true,
    });
  };

  function handleMoveHome() {
    navigation.navigate("home");
  }

  async function handleEditMeat() {
    try {
      await MeatEditByName(meat.name, formData);
      navigation.navigate("home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <HeaderMeat
        onPress={handleNavigationClick}
        isDefault
        title="Editar Refeição"
      />
      <MeatContent
        editing
        save={handleEditMeat}
        nome={formData.name}
        descricao={formData.description}
        data={formData.date}
        hora={formData.hour}
        option={option}
        filter={handleFilterChange}
        name={(text) => handleChangeText("name", text)}
        description={(text) => handleChangeText("description", text)}
        date={(text) => handleChangeText("date", text)}
        hour={(text) => handleChangeText("hour", text)}
      />
    </Container>
  );
}
