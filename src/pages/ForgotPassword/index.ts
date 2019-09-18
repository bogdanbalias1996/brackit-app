import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";

export interface ForgotPasswordScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
  navigationOptions?: NavigationScreenOptions;
  isLoading: boolean;
}

export type ForgotPasswordScreenDispatchProps = {
  forgotPassword: (
    data: ForgotPasswordScreenFromData,
    setErrors: any,
    navigation: any
  ) => Promise<any>;
};

export type ForgotPasswordScreenProps = ForgotPasswordScreenStateProps &
  ForgotPasswordScreenDispatchProps;

export type ForgotPasswordScreenFromData = {
  emailId: string;
};
