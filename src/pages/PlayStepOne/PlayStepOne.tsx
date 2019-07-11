import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { clearChallengeData } from "../Play/actions";
import { navigate } from "../../navigationService";
import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { PlayStepOneScreenProps, PlayStepOneScreenDispatchProps } from ".";
import { setChallengeName } from "./actions";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./PlayStepOne.styles";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity
          style={styles.iconCancel}
          onPress={() => {
            navigate({ routeName: "Play" });
            props.clearChallengeData();
          }}
        >
          <Icon size={24} name="cancel" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Create challenge".toUpperCase()}
    getRightComponent={() => {
      return (
        <Text style={styles.headerRightText}>{"Step 1/5".toUpperCase()}</Text>
      );
    }}
  />
);

const ConnectedHeader = connect(
  null,
  dispatch => ({
    clearChallengeData: () => dispatch(clearChallengeData())
  })
)(Header);

const mapStateToProps = state => ({
  challengeName: state.ChallengeState.challengeName
});
const mapDispatchToProps = (dispatch): PlayStepOneScreenDispatchProps => ({
  setChallengeName: (name: string) => dispatch(setChallengeName(name)),
  clearChallengeData: () => dispatch(clearChallengeData())
});

export class Component extends React.PureComponent<PlayStepOneScreenProps> {
  static navigationOptions = {
    header: props => <ConnectedHeader {...props} />
  };

  handleSubmit = values => {
    const { setChallengeName } = this.props;

    setChallengeName(values.challengeName);
    navigate({ routeName: "PlayStepTwo" });
  };

  render() {
    const { challengeName } = this.props;
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={{
            challengeName: challengeName
          }}
          onSubmit={this.handleSubmit}
        >
          {(props: any) => {
            const { handleSubmit, values } = props;

            return (
              <View style={styles.form}>
                <TextInputStyled
                  borderTop={true}
                  name="challengeName"
                  label="challenge title"
                  formProps={props}
                />
                <View
                  style={{ opacity: values.challengeName.length ? 1 : 0.2 }}
                >
                  <ButtonStyled
                    style={styles.btnNext}
                    onPress={() => {
                      values.challengeName.length && handleSubmit();
                    }}
                    text={"Next".toUpperCase()}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    );
  }
}

export const PlayStepOneScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
