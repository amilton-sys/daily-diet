import { TouchableOpacityProps } from "react-native";
import { Button, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function HeaderNewMeat({ title, ...rest }: Props) {
  return (
    <Container>
      <Button {...rest}>
        <Icon />
      </Button>
      <Title>{title}</Title>
    </Container>
  );
}
