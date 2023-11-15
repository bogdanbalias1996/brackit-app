import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";

export interface SignInScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
  isFontLoaded: boolean;
  navigationOptions?: NavigationScreenOptions;
  isLoading: boolean;
  errorMsg: string;
}

export type SignInScreenDispatchProps = {
  signInUser: (data: SignInScreenFromData, navigation: any) => Promise<any>;
  clearErrorAuth: () => any;
};

export type SignInScreenProps = SignInScreenStateProps &
  SignInScreenDispatchProps;

export type SignInScreenFromData = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
};
