export interface ProfileScreenStateProps {}

export type ProfileScreenDispatchProps = {};

export type ProfileScreenProps = ProfileScreenStateProps &
  ProfileScreenDispatchProps;

export interface ProfileStatsItemProps {
  icon: any;
  points: number;
  name: string;
  isSolid?: boolean;
}
