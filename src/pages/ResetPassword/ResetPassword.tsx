import * as React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dispatch } from "redux";

import styles from "./ResetPassword.styles";
import { ResetPasswordScreenProps, ResetPasswordScreenFromData } from "./";
import { forgotPassword } from "../ForgotPassword/actions";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { navigate } from "../../navigationService";

const mapStateToProps = state => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  forgotPassword: (
    data: ResetPasswordScreenFromData,
    setErrors: any,
    navigation: any
  ) => dispatch(forgotPassword(data, setErrors, navigation) as any)
});

export class Component extends React.PureComponent<ResetPasswordScreenProps> {
  state = {
    sendEmail: false
  };

  handleSubmit = (values, { setErrors }: any) => {
    const { navigation, forgotPassword } = this.props;

    forgotPassword(values, setErrors, navigation);
  };

  setErrors = () => {
    return {};
  };

  render() {
    const { forgotPassword, navigation } = this.props;
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require("../../../assets/logo2x.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={{ width: "100%" }}>
          <Text style={styles.title}>{"Reset password".toUpperCase()}</Text>
          <Text style={styles.description}>
            We have sent an email to{" "}
            <Text style={styles.createAccountLink}>
              {navigation.state.params ? navigation.state.params.email : "-"}
            </Text>
            . Please click the reset password link to set your new password
          </Text>
          <ButtonStyled
            style={styles.btnSubmit}
            onPress={() => {
              navigate({ routeName: "SignIn" });
            }}
            text={"Back to login".toUpperCase()}
          />

          <View style={styles.createAccountContainer}>
            <TouchableOpacity
              onPress={() => {
                forgotPassword(
                  { emailId: navigation.state.params.emailId },
                  () => {},
                  navigation
                );
              }}
            >
              <Text style={styles.resetText}>
                Didn’t receive the email yet? Please check your spam folder.{" "}
                <Text style={styles.createAccountLink}>
                  {"Resend".toUpperCase()}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export const ResetPasswordScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
