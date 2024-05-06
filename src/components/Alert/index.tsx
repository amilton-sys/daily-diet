import { useState } from "react";
import { View, Button, StyleSheet, ModalProps } from "react-native";
import {
  ButtonText,
  Container,
  Content,
  ShowAlert,
  Title,
  Form,
  ButtonStyleProps,
} from "./styles";
import { Button as ButtonStyle } from "./styles";

type Props = ModalProps & ButtonStyleProps & {

  
};

export function Alert({ isYes = false, ...rest }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Container>
        <ShowAlert transparent visible={showModal} {...rest}>
          <Container>
            <Content>
              <Title>Deseja realmente excluir o registro da refeição?</Title>
              <Form>
                <ButtonStyle onPress={() => setShowModal(false)}>
                  <ButtonText>Cancelar</ButtonText>
                </ButtonStyle>
                <ButtonStyle isYes>
                  <ButtonText isYes>Sim,excluir</ButtonText>
                </ButtonStyle>
              </Form>
            </Content>
          </Container>
        </ShowAlert>
      </Container>
      <View style={styles.buttonView}>
        <Button title="Open modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
