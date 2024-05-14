import { TouchableOpacityProps } from "react-native";
import {
  Button,
  Container,
  Icon,
  Title,
  VisualizationStyleProps,
} from "./styles";


type Props = TouchableOpacityProps &
  VisualizationStyleProps & {
    title: string;
  };

export function HeaderMeat({ title, isLow = false, isDefault = false, ...rest }: Props) {

  return (
    <Container isDefault={isDefault} isLow={isLow}>
      <Button {...rest}>
        <Icon />
      </Button>
      <Title>{title}</Title>
    </Container>
  );
}
