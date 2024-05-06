import { FlatList } from "react-native";
import { Container, Input, Label, FormDate, Form } from "./styles";
import { useState } from "react";
import { FilterMeat } from "@components/FIlterMeat";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { meatCreate } from "@storage/meat/meatCreate";

export function MeatContent() {
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFilterChange = (value) => {
    setOption(value);
    setFormData({
      ...formData,
      isLow: value === "Sim" ? false : true,
    });
  };

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
      <Label>Nome</Label>
      <Input
        value={formData.name}
        onChangeText={(text) => handleChangeText("name", text)}
      />
      <Label>Descrição</Label>
      <Input
        textArea
        style={{ textAlignVertical: "top" }}
        numberOfLines={4}
        multiline
        value={formData.description}
        onChangeText={(text) => handleChangeText("description", text)}
      />
      <FormDate>
        <Form>
          <Label>Data</Label>
          <Input
            date
            value={formData.date}
            onChangeText={(text) => handleChangeText("date", text)}
          />
        </Form>
        <Form>
          <Label>Hora</Label>
          <Input
            date
            value={formData.hour}
            onChangeText={(text) => handleChangeText("hour", text)}
          />
        </Form>
      </FormDate>
      <Label>Está dentro da dieta?</Label>
      <FlatList
        data={["Sim", "Não"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <FilterMeat
            isActive={item === option}
            title={item}
            isLow={item === "Não"}
            onPress={() => handleFilterChange(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Button title="Cadastrar refeição" onPress={handleAddNewMeat} />
    </Container>
  );
}
