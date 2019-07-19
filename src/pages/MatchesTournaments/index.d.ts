export interface MatchesTournamentsScreenStateProps {}

export type MatchesTournamentsScreenDispatchProps = {
  setChallengeName: (name: string) => void;
};

export type MatchesTournamentsScreenProps = MatchesTournamentsScreenStateProps &
  MatchesTournamentsScreenDispatchProps;
