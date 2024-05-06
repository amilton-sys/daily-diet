import { Button } from "@components/Button";
import { Container, Image, Strong, SubTitle, Title } from "./styles";
import imageSucess from "@assets/Illustration.png";
import imageFail from "@assets/Illustration2.png";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";

export function FeedBack({ route }) {
  const { sucess } = route.params;
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  function handleNavigationClick(){
    navigation.navigate("home");
  }
  return (
    <Container>
      {!sucess ? (
        <>
          <Title>Continue assim!</Title>
          <SubTitle>
            Você continua <Strong>dentro da dieta.</Strong>Muito bem!
          </SubTitle>
          <Image source={imageSucess} />
        </>
      ) : (
        <>
          <Title style={{ color: COLORS.RED_DARK }}>Que pena!</Title>
          <SubTitle>
            Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
            esforçando e não desista!
          </SubTitle>
          <Image source={imageFail} />
        </>
      )}
      <Button
        isFeedback
        title="Ir para a página inicial"
        onPress={handleNavigationClick}
      />
    </Container>
  );
}
