import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { IGlobalState } from "../../coreTypes";
import { navigate } from "../../navigationService";
import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { PlayStepOneScreenProps } from ".";
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
          onPress={() => navigate({ routeName: "Play" })}
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

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<PlayStepOneScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  handleSubmit = values => {
    alert(JSON.stringify(values));
    navigate({ routeName: "PlayStepTwo" });
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={{
            challengeName: ""
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
                    style={[
                      styles.btnNext,
                      { elevation: values.challengeName.length ? 6 : 0 }
                    ]}
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
