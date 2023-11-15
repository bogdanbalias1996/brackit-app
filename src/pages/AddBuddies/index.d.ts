import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";
export interface AddBuddiesScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
}

export type AddBuddiesScreenDispatchProps = {};

export type AddBuddiesScreenProps = AddBuddiesScreenStateProps &
  AddBuddiesScreenDispatchProps;
