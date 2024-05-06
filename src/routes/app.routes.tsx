import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditMeat } from "@screens/EditMeat";
import { FeedBack } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { NewMeat } from "@screens/NewMeat";
import { Statistics } from "@screens/Statistics";
import { VisualizationMeat } from "@screens/VisualizationMeat";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewMeat} />
      <Screen name="edit" component={EditMeat} />
      <Screen name="statistic" component={Statistics} />
      <Screen name="visualization" component={VisualizationMeat} />
      <Screen name="feed" component={FeedBack} />
    </Navigator>
  );
}
