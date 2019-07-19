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
  ActivityTournamentsScreenProps,
  ActivityTournamentsScreenDispatchProps
} from ".";
import { setChallengeName } from "./actions";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./ActivityTournaments.styles";

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
    title={"Activity - Tournaments".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (
  dispatch
): ActivityTournamentsScreenDispatchProps => ({
  setChallengeName: (name: string) => dispatch(setChallengeName(name))
});

export class Component extends React.PureComponent<
  ActivityTournamentsScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  handleSubmit = values => {
    const { setChallengeName } = this.props;

    setChallengeName(values.challengeName);
    navigate({ routeName: "ActivityTournaments" });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>ActivityTournaments</Text>
      </SafeAreaView>
    );
  }
}

export const ActivityTournamentsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
