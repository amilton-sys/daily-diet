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
import { VisualizationMeat } from "@screens/VisualizationMeat";
import { EditMeat } from "@screens/EditMeat";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <EditMeat /> : <Loading />}
    </ThemeProvider>
  );
}
