import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText, Icon, InputStyleProps } from "./styles";

type Props = TouchableOpacityProps &
  InputStyleProps & {
    title: string;
  };

export function FilterMeat({
  title,
  isLow = false,
  isActive = false,
  ...rest
}: Props) {
  return (
    <Container isActive={isActive} isLow={isLow} {...rest}>
      <Icon isLow={isLow} isActive={isActive} />
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
