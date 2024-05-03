import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import theme from "@theme/index";

import { Home } from "@screens/Home";
import { Loading } from "@components/Loading";
import { Statistics } from "@screens/Statistics";
import { NewMeat } from "@screens/NewMeat";
import { FeedBack } from "@components/MeatSucess";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <FeedBack /> : <Loading />}
    </ThemeProvider>
  );
}
