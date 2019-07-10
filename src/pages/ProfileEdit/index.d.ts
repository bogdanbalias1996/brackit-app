export interface ProfileEditScreenStateProps {}

export type ProfileEditScreenDispatchProps = {
  setChallengeName: (name: string) => void;
};

export type ProfileEditScreenProps = ProfileEditScreenStateProps &
  ProfileEditScreenDispatchProps;
