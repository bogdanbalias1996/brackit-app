import * as React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { IGlobalState } from "../../coreTypes";
import { navigate, goBack } from "../../navigationService";
import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import {
  ActivityChallengesScreenProps,
  ActivityChallengesScreenDispatchProps
} from ".";
import { setChallengeName } from "./actions";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./ActivityChallenges.styles";

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
    title={"Activity - Challenges".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (
  dispatch
): ActivityChallengesScreenDispatchProps => ({
  setChallengeName: (name: string) => dispatch(setChallengeName(name))
});

export class Component extends React.PureComponent<
  ActivityChallengesScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  handleSubmit = values => {
    const { setChallengeName } = this.props;

    setChallengeName(values.challengeName);
    navigate({ routeName: "ActivityChallenges" });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>ActivityChallenges</Text>
      </SafeAreaView>
    );
  }
}

export const ActivityChallengesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
