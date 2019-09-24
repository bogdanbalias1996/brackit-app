import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";

export interface SingUpScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
  navigationOptions?: NavigationScreenOptions;
  isLoading: boolean;
  errorMsg: string;
}

export type SingUpScreenDispatchProps = {
  signUpUser: (data: SingUpScreenFromData, navigation: any) => Promise<any>;
  clearErrorAuth: () => any;
};

export type SingUpScreenProps = SingUpScreenStateProps &
  SingUpScreenDispatchProps;

export type SingUpScreenFromData = {
  email: string;
  password: string;
  name: string;
};

export type AuthResponse = {
  accessToken: string;
};
