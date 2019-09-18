import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";

export interface SingUpScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
  navigationOptions?: NavigationScreenOptions;
  isLoading: boolean;
}

export type SingUpScreenDispatchProps = {
  signUpUser: (
    data: SingUpScreenFromData,
    setErrors: any,
    navigation: any
  ) => Promise<any>;
};

export type SingUpScreenProps = SingUpScreenStateProps &
  SingUpScreenDispatchProps;

export type SingUpScreenFromData = {
  email: string;
  password: string;
  name: string;
};
