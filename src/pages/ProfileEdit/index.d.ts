import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";

export interface ProfileEditScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
}

export type ProfileEditScreenDispatchProps = {
  setChallengeName: (name: string) => void;
};

export type ProfileEditScreenProps = ProfileEditScreenStateProps &
  ProfileEditScreenDispatchProps;
