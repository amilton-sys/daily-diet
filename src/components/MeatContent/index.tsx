import { FlatList } from "react-native";
import { Container, Input, Label, FormDate, Form } from "./styles";
import { useState } from "react";
import { FilterMeat } from "@components/FIlterMeat";
import { Button } from "@components/Button";

export function MeatContent() {
  const [option, setOption] = useState("Sim");
  return (
    <Container>
      <Label>Nome</Label>
      <Input autoFocus/>
      <Label>Descrição</Label>
      <Input
        textArea
        style={{ textAlignVertical: "top" }}
        numberOfLines={4}
        multiline
      />
      <FormDate>
        <Form>
          <Label>Data</Label>
          <Input date />
        </Form>
        <Form>
          <Label>Hora</Label>
          <Input date />
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
            onPress={() => setOption(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Button title="Cadastrar refeição" />
    </Container>
  );
}
