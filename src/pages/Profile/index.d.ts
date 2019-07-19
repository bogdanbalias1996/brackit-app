export interface ProfileScreenStateProps {}

export type ProfileScreenDispatchProps = {};

export type ProfileScreenProps = ProfileScreenStateProps &
  ProfileScreenDispatchProps;

export interface ProfileStatsItemProps {
  icon: string;
  points: number;
  name: string;
  isSolid?: boolean;
}
