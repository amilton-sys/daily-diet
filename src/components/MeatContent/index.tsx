import { FlatList } from "react-native";
import { Container, Input, Label, FormDate, Form } from "./styles";
import { FilterMeat } from "@components/FIlterMeat";
import { Button } from "@components/Button";

type Props = {
  name: (text: string) => void;
  description: (text:string) => void;
  date: (text: string) => void;
  hour: (text: string) => void;
  filter: (fil: string) => void;
  save?: () => void;
  newMeat?: () => void;
  nome: string;
  descricao: string;
  data: string;
  hora: string;
  editing?: boolean;
  option: string;
};

export function MeatContent({
  name,
  description,
  date,
  hour,
  filter,
  save,
  newMeat,
  nome,
  data,
  descricao,
  hora,
  editing = false,
  option,
}: Props) {
  return (
    <Container>
      <Label>Nome</Label>
      <Input value={nome} onChangeText={name} />
      <Label>Descrição</Label>
      <Input
        textArea
        style={{ textAlignVertical: "top" }}
        numberOfLines={4}
        multiline
        value={descricao}
        onChangeText={description}
      />
      <FormDate>
        <Form>
          <Label>Data</Label>
          <Input date value={data} onChangeText={date} />
        </Form>
        <Form>
          <Label>Hora</Label>
          <Input date value={hora} onChangeText={hour} />
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
            onPress={() => filter(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {editing ? (
        <Button title="Salvar alterações" onPress={save} />
      ) : (
        <Button title="Cadastrar refeição" onPress={newMeat} />
      )}
    </Container>
  );
}
