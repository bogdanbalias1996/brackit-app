import * as React from "react";
import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { connect } from "react-redux";

import { IGlobalState } from "../../coreTypes";
import { goBack } from "../../navigationService";
import {
  MatchesTournamentsScreenProps,
  MatchesTournamentsScreenDispatchProps
} from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./MatchesTournaments.styles";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity style={styles.iconCancel} onPress={() => goBack()}>
          <Icon name="left" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Matches - Tournaments".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (
  dispatch
): MatchesTournamentsScreenDispatchProps => ({});

export class Component extends React.PureComponent<
  MatchesTournamentsScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>MatchesTournaments</Text>
      </SafeAreaView>
    );
  }
}

export const MatchesTournamentsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
