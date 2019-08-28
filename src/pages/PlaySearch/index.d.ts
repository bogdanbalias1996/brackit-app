import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";

export interface PlaySearchScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
}

export type PlaySearchScreenDispatchProps = {};

export type PlaySearchScreenProps = PlaySearchScreenStateProps &
  PlaySearchScreenDispatchProps;

export type TournamentItemProps = {
  data: any;
};
