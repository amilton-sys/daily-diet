import { TouchableOpacityProps } from "react-native";
import { Container, Title, SubTitle, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  subTitle: string;
};

export function PercenteCard({ title, subTitle, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Icon/>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
