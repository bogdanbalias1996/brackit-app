import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";

export interface SignInScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
  isFontLoaded: boolean;
  navigationOptions?: NavigationScreenOptions;
  isLoading: boolean;
}

export type SignInScreenDispatchProps = {
  signInUser: (
    data: SignInScreenFromData,
    setErrors: any,
    navigation: any
  ) => Promise<any>;
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
