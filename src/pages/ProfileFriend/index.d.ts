export interface ProfileFriendScreenStateProps {}

export type ProfileFriendScreenDispatchProps = {};

export type ProfileFriendScreenProps = ProfileFriendScreenStateProps &
  ProfileFriendScreenDispatchProps;

export interface ProfileStatsItemProps {
  icon: any;
  points: number;
  name: string;
  isSolid?: boolean;
}
