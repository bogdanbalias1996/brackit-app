import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";

export interface ResetPasswordScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
  navigationOptions?: NavigationScreenOptions;
}

export type ResetPasswordScreenDispatchProps = {
  forgotPassword: (
    data: ResetPasswordScreenFromData,
    setErrors: any,
    navigation: any
  ) => Promise<any>;
};

export type ResetPasswordScreenProps = ResetPasswordScreenStateProps &
  ResetPasswordScreenDispatchProps;

export type ResetPasswordScreenFromData = {
  emailId: string;
};
