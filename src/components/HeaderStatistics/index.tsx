import {
  Container,
  Icon,
  SubTitle,
  FilterStyleProps,
  Title,
  Button,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = FilterStyleProps &
  TouchableOpacityProps & {
    title: string;
    subTitle: string;
  };

export function HeaderStatistics({
  title,
  subTitle,
  isLow = false,
  ...rest
}: Props) {
  return (
    <Container isLow={isLow}>
      <Button {...rest}>
        <Icon isLow={isLow} />
      </Button>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
