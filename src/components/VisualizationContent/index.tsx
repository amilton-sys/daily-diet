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
};

export function VisualizationContent({
  title,
  subTitle,
  dateAndHour,
  isLow = true,
}: Props) {
  const { FONT_SIZE } = useTheme();
  return (
    <Container>
      <Title>Sanduíche</Title>
      <SubTitle>
        Sanduíche de pão integral com atum e salada de alface e tomate
      </SubTitle>
      <Title style={{ fontSize: FONT_SIZE.MD }}>Data e hora</Title>
      <SubTitle>20/06/2021 ás 16:00</SubTitle>
      <Button>
        {isLow ? (
          <>
            <Icon />
            <ButtonText>dentro da dieta</ButtonText>
          </>
        ) : (
          <>
            <Icon isLow />
            <ButtonText>fora da dieta</ButtonText>
          </>
        )}
      </Button>
      <ComponentButton editButton title="Editar refeição" />
      <ComponentButton isTrashButton  title="Excluir refeição" />
    </Container>
  );
}
