import * as React from "react";
import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { connect } from "react-redux";

import { IGlobalState } from "../../coreTypes";
import { goBack } from "../../navigationService";
import {
  MatchesChallengesScreenProps,
  MatchesChallengesScreenDispatchProps
} from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./MatchesChallenges.styles";

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
    title={"Matches - Challenges".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (
  dispatch
): MatchesChallengesScreenDispatchProps => ({});

export class Component extends React.PureComponent<
  MatchesChallengesScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>MatchesChallenges</Text>
      </SafeAreaView>
    );
  }
}

export const MatchesChallengesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
