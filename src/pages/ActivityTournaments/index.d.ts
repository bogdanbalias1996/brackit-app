export interface ActivityTournamentsScreenStateProps { }

export type ActivityTournamentsScreenDispatchProps = {
  setChallengeName: (name: string) => void;
};

export type ActivityTournamentsScreenProps = ActivityTournamentsScreenStateProps &
  ActivityTournamentsScreenDispatchProps;
