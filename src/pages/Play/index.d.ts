import {
  NavigationScreenProp,
  NavigationScreenOptions
} from "react-navigation";
export type TournamentItem = {
  allowRegistration: boolean;
  createdOn: number;
  creator: string;
  currency: string;
  data: any;
  doublesEntryFeeCoins: number;
  doublesEntryFeeFiat: number;
  edited: boolean;
  endDate: number;
  entries: number;
  events: string;
  grade: string;
  gradeColorCode: string;
  id: string;
  markedForDelete: boolean;
  players: number;
  prizeMoney: number;
  rounds: number;
  singlesEntryFeeCoins: number;
  singlesEntryFeeFiat: number;
  startDate: number;
  title: string;
  tournamentLoc: string;
};
export type LeaderBoardItem = {
  id: string;
  name: string;
  number: string;
  avatar: number;
  avatarRate: number;
  numberPlays: number;
  numberWonPlays: number;
  performance: number;
};
export interface PlayScreenStateProps {
  navigation: NavigationScreenProp<any, any>;
  TournamentItems: Array<TournamentItem>;
  activeTab: any;
}

export type PlayScreenDispatchProps = {
  setActiveTab: (val: any) => void;
};

export type PlayScreenProps = PlayScreenStateProps & PlayScreenDispatchProps;
