export interface MatchesChallengesScreenStateProps {}

export type MatchesChallengesScreenDispatchProps = {
  setChallengeName: (name: string) => void;
};

export type MatchesChallengesScreenProps = MatchesChallengesScreenStateProps &
  MatchesChallengesScreenDispatchProps;
