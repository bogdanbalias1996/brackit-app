export interface ActivityChallengesScreenStateProps {}

export type ActivityChallengesScreenDispatchProps = {
  setChallengeName: (name: string) => void;
};

export type ActivityChallengesScreenProps = ActivityChallengesScreenStateProps &
  ActivityChallengesScreenDispatchProps;
