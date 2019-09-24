import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";

export interface ForgotPasswordScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
  navigationOptions?: NavigationScreenOptions;
  isLoading: boolean;
  errorMsg: string;
}

export type ForgotPasswordScreenDispatchProps = {
  forgotPassword: (
    data: ForgotPasswordScreenFromData,
    navigation: any
  ) => Promise<any>;
  clearErrorAuth: () => any;
};

export type ForgotPasswordScreenProps = ForgotPasswordScreenStateProps &
  ForgotPasswordScreenDispatchProps;

export type ForgotPasswordScreenFromData = {
  emailId: string;
};
