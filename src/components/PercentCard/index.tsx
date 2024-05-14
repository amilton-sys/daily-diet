import { TouchableOpacityProps } from "react-native";
import { Container, Title, SubTitle, Icon, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
    subTitle: string;
  };

export function PercenteCard({
  title,
  subTitle,
  isLow = false,
  ...rest
}: Props) {
  return (
    <Container
      style={{ shadowColor: "black", elevation: 5 }}
      isLow={isLow}
      {...rest}
    >
      <Title>{title}</Title>
      <Icon isLow={isLow} />
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
