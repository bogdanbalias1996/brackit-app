import { NavigationScreenProp, NavigationScreenOptions } from 'react-navigation'
export interface TournamentDetailScreenStateProps {
  navigation: NavigationScreenProp<any, any>
}

export type TournamentDetailScreenDispatchProps = {};

export type TournamentDetailScreenProps = TournamentDetailScreenStateProps &
  TournamentDetailScreenDispatchProps;
