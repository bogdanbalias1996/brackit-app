export interface ProfileScreenStateProps {
  userId: string;
  profileInfo: any;
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
