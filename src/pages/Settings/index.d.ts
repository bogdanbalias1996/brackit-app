export interface SettingsScreenStateProps {}

export type SettingsScreenDispatchProps = {
  logoutUser: () => any;
};

export type SettingsScreenProps = SettingsScreenStateProps &
  SettingsScreenDispatchProps;
