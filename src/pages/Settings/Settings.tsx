import * as React from "react";
import { connect } from "react-redux";
import { SettingsScreenProps } from ".";
import { Text, TouchableOpacity, ScrollView, View } from "react-native";

import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./Settings.styles";
import { goBack } from "../../navigationService";
import { colorLightGreyBlue } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity style={styles.iconCancel} onPress={() => goBack()}>
          <Icon name="left" />
        </TouchableOpacity>
      );
    }}
    title="Settings"
    getRightComponent={() => {}}
  />
);

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

const ListItem = ({
  title,
  onPress,
  withIcon = false,
  style = {},
  styleText = {}
}) => {
  return (
    <TouchableOpacity
      style={[styles.listItem, style]}
      onPress={() => !!onPress && onPress()}
    >
      <Text style={[styles.listItemText, styleText]}>{title}</Text>
      {!!withIcon && <Icon name="next" color={colorLightGreyBlue} size={24} />}
    </TouchableOpacity>
  );
};

export class Component extends React.PureComponent<SettingsScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.listItemGroup}>
          <ListItem
            title="Settings page"
            onPress={() => {}}
            withIcon={true}
            style={{ borderTopWidth: 1 }}
          />
          <ListItem
            title="Email notifications"
            onPress={() => {}}
            withIcon={true}
          />
          <ListItem title="Account" onPress={() => {}} withIcon={true} />
        </View>
        <View style={styles.listItemGroup}>
          <ListItem
            title="Clear image cache"
            onPress={() => {}}
            style={{ borderTopWidth: 1 }}
          />
          <ListItem title="Clear all caches" onPress={() => {}} />
        </View>
        <View style={styles.listItemGroup}>
          <ListItem
            title="Sign Out"
            onPress={() => {}}
            styleText={styles.signOutText}
            style={{ borderTopWidth: 1 }}
          />
        </View>
      </ScrollView>
    );
  }
}

export const SettingsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
