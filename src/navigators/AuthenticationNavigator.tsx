import { createStackNavigator } from "react-navigation";
import { SignInScreen } from "../pages/SignIn/SignIn";
import { ForgotPasswordScreen } from "../pages/ForgotPassword/ForgotPassword";
import { ResetPasswordScreen } from "../pages/ResetPassword/ResetPassword";
import { SignUpScreen } from "../pages/SignUp/SignUp";

export const AuthenticationNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
      navigationOptions: ({ navigation, screenProps }: any) => ({
        header: null,
        headerTransparent: true,
        title: "Login"
      })
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: ({ navigation, screenProps }: any) => ({
        title: "SignUp",
        header: null,
        headerTransparent: true,
        headerTintColor: "white"
      })
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: ({ navigation, screenProps }: any) => ({
        headerTransparent: true,
        headerTintColor: "white"
      })
    },
    ResetPassword: {
      screen: ResetPasswordScreen,
      navigationOptions: ({ navigation, screenProps }: any) => ({
        headerTransparent: true,
        headerTintColor: "white"
      })
    }
  },
  {
    headerLayoutPreset: "center"
  }
);
