export interface ActivityPurchasesScreenStateProps { }

export type ActivityPurchasesScreenDispatchProps = {
  setChallengeName: (name: string) => void;
};

export type ActivityPurchasesScreenProps = ActivityPurchasesScreenStateProps &
  ActivityPurchasesScreenDispatchProps;
