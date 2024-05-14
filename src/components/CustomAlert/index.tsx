import { Modal } from "react-native";
import {
  Container,
  ButtonText,
  Message,
  ModalView,
  Row,
  Button,
  ButtonStyleProps,
} from "./styles";
import { useTheme } from "styled-components";

type Props = ButtonStyleProps & {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export function CustomAlert({ isVisible, onClose, onConfirm }: Props) {
  const { COLORS } = useTheme();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <Container>
        <ModalView>
          <Message>Deseja realmente excluir o registro da refeição?</Message>
          <Row>
            <Button buttonCancel onPress={onClose}>
              <ButtonText buttonCancel>Cancelar</ButtonText>
            </Button>
            <Button onPress={onConfirm}>
              <ButtonText>Sim, excluir</ButtonText>
            </Button>
          </Row>
        </ModalView>
      </Container>
    </Modal>
  );
}
