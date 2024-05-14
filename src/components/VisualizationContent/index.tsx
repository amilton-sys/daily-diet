import { useTheme } from "styled-components";
import {
  Container,
  SubTitle,
  Title,
  Button,
  ButtonText,
  Icon,
  InputStyleProps,
} from "./styles";

import { Button as ComponentButton } from "@components/Button";

type Props = InputStyleProps & {
  title: string;
  subTitle: string;
  dateAndHour: string;
  onRemove: () => void;
  onEdit: () => void;
};

export function VisualizationContent({
  title,
  subTitle,
  dateAndHour,
  isLow = false,
  onRemove,
  onEdit,
}: Props) {
  const { FONT_SIZE } = useTheme();
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Title style={{ fontSize: FONT_SIZE.MD }}>Data e hora</Title>
      <SubTitle>{dateAndHour}</SubTitle>
      <Button>
        <Icon isLow={isLow} />
        {isLow ? (
          <ButtonText>fora da dieta</ButtonText>
        ) : (
          <ButtonText>dentro da dieta</ButtonText>
        )}
      </Button>
      <ComponentButton onPress={onEdit} editButton title="Editar refeição" />
      <ComponentButton
        onPress={onRemove}
        isTrashButton
        title="Excluir refeição"
      />
    </Container>
  );
}
