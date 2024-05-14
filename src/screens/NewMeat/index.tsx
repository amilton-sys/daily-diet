import { HeaderMeat } from "@components/HeaderMeat";
import { Container } from "./styles";
import { MeatContent } from "@components/MeatContent";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { meatCreate } from "@storage/meat/meatCreate";
import { Alert } from "react-native";

export function NewMeat() {
  const [option, setOption] = useState("");
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    hour: "",
    isLow: false,
  });

  const handleChangeText = (name: any, value: any) => {
    if (name.trim().length === 0) {
      return Alert.alert(
        "Criação de Refeição",
        "O campo de nome não pode estar em branco ou vazio."
      );
    }
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

  async function handleAddNewMeat() {
    try {
      await meatCreate(formData);
      navigation.navigate("feed", { sucess: formData.isLow });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <HeaderMeat onPress={handleMoveHome} isDefault title="Nova refeição" />
      <MeatContent
        nome={formData.name}
        descricao={formData.description}
        data={formData.date}
        hora={formData.hour}
        filter={handleFilterChange}
        option={option}
        newMeat={handleAddNewMeat}
        name={(text) => handleChangeText("name", text)}
        description={(text) => handleChangeText("description", text)}
        date={(text) => handleChangeText("date", text)}
        hour={(text) => handleChangeText("hour", text)}
      />
    </Container>
  );
}
