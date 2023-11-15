export interface ProfileScreenStateProps {
  userId: string;
  profileInfo: Profile;
}

export type ProfileScreenDispatchProps = {
  getProfile: (id: string) => Promise<any>;
};

export type ProfileScreenProps = ProfileScreenStateProps &
  ProfileScreenDispatchProps;

export interface ProfileStatsItemProps {
  icon: any;
  points: number;
  name: string;
  isSolid?: boolean;
}

export type Profile = {
  id: string;
  name: string;
  handle: string;
  email: string;
  status: string;
  role: string;
  verified: boolean;
  flagged: boolean;
  followingCnt: number;
  followerCnt: number;
  following: boolean;
  fbConnected: boolean;
  twitterConnected: boolean;
  profileInfo: any;
};
