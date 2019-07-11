import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { IGlobalState } from "../../coreTypes";
import { navigate, goBack } from "../../navigationService";
import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { ProfileEditScreenProps, ProfileEditScreenDispatchProps } from ".";
import { setChallengeName } from "./actions";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./ProfileEdit.styles";

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
    title={"Edit profile".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (dispatch): ProfileEditScreenDispatchProps => ({
  setChallengeName: (name: string) => dispatch(setChallengeName(name))
});

export class Component extends React.PureComponent<ProfileEditScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  handleSubmit = values => {
    const { setChallengeName } = this.props;

    setChallengeName(values.challengeName);
    navigate({ routeName: "Profile" });
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
            fullName: "Erika Mateo"
          }}
          onSubmit={this.handleSubmit}
        >
          {(props: any) => {
            const { handleSubmit, values } = props;

            return (
              <View style={styles.form}>
                <TextInputStyled
                  borderTop={true}
                  name="fullName"
                  label="full name"
                  value={values.fullName}
                  formProps={props}
                />
                <View style={{ opacity: values.fullName.length ? 1 : 0.2 }}>
                  <ButtonStyled
                    style={[
                      styles.btnNext,
                      { elevation: values.fullName.length ? 6 : 0 }
                    ]}
                    onPress={() => {
                      values.fullName.length && handleSubmit();
                    }}
                    text={"Save".toUpperCase()}
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

export const ProfileEditScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
