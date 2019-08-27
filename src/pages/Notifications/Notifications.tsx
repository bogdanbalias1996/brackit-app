import * as React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView } from "react-navigation";
import { NotificationsScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Text, StyleSheet } from "react-native";
import { colorLightBlue, colorTextGray } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    title={"Notifications".toUpperCase()}
    getRightComponent={() => {}}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<NotificationsScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.noDataText}>No Data</Text>
      </SafeAreaView>
    );
  }
}

export const NotificationsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLightBlue
  },
  noDataText: {
    fontFamily: "montserrat-medium",
    fontSize: 14,
    width: "100%",
    textAlign: "center",
    color: colorTextGray,
    marginVertical: 20
  }
});
