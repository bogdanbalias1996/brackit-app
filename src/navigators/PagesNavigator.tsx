import { createStackNavigator } from "react-navigation";
import { OnboardingScreen } from "../pages/Onboarding/Onboarding";
import { LoadingScreen } from "../pages/Loading/Loading";

export const PagesNavigator = createStackNavigator(
  {
    Loading: {
      screen: LoadingScreen
    },
    Onboarding: {
      screen: OnboardingScreen,
      navigationOptions: ({ navigation, screenProps }: any) => ({
        header: null
      })
    }
  },
  {
    headerLayoutPreset: "center"
  }
);
