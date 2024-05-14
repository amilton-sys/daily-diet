import { useNavigation } from "@react-navigation/native";
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
  isLow
}: Props) {
  const navigation = useNavigation();
  function handleHomeNavigation() {
    navigation.navigate("home");
  }
  return (
    <Container isLow={isLow}>
      <Button onPress={handleHomeNavigation}>
        <Icon isLow={isLow} />
      </Button>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
