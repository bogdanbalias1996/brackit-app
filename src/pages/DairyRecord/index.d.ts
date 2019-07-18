export interface DairyRecordScreenStateProps { }

export type DairyRecordScreenDispatchProps = {
  setChallengeName: (name: string) => void;
};

export type DairyRecordScreenProps = DairyRecordScreenStateProps &
  DairyRecordScreenDispatchProps;
