import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title, ButtonStyleProps } from "./styles";

type Props = TouchableOpacityProps &
  ButtonStyleProps & {
    title: string;
    showIcon?: boolean;
  };

export function Button({
  title,
  showIcon = false,
  isFeedback = false,
  ...rest
}: Props) {
  return (
    <Container isFeedback={isFeedback} {...rest}>
      {showIcon && <Icon />}
      <Title>{title}</Title>
    </Container>
  );
}
