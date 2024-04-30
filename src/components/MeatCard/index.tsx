import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Form,
  Hour,
  Pipe,
  Title,
  FilterStyleProps,
  Icon,
} from "./styles";
Container;

type Props = FilterStyleProps &
  TouchableOpacityProps & {
    hour: string;
    title: string;
  };

export function MeatCard({ hour, title, isLow = false, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Form>
        <Hour>{hour}</Hour>
        <Pipe> | </Pipe>
        <Title>{title}</Title>
      </Form>
      <Icon isLow={isLow} />
    </Container>
  );
}
