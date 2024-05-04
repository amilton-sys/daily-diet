import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title, ButtonStyleProps, IconTwo, IconThree } from "./styles";

type Props = TouchableOpacityProps &
  ButtonStyleProps & {
    title: string;
    showIcon?: boolean;
    editButton?: boolean;
  };

export function Button({
  title,
  showIcon = false,
  isFeedback = false,
  editButton = false,
  isTrashButton = false,
  ...rest
}: Props) {
  return (
    <Container isTrashButton={isTrashButton} isFeedback={isFeedback} {...rest}>
      {showIcon && <Icon />}
      {editButton && <IconTwo />}
      {isTrashButton && <IconThree />}
      <Title isTrashButton={isTrashButton}>{title}</Title>
    </Container>
  );
}
