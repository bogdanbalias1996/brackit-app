import * as React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dispatch } from "redux";

import styles from "./ForgotPassword.styles";
import { ForgotPasswordScreenProps, ForgotPasswordScreenFromData } from "./";
import { forgotPassword } from "./actions";
import { clearErrorAuth } from "../SignUp/actions";
import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { navigate } from "../../navigationService";

const mapStateToProps = state => ({
  isLoading: state.SignUpState.isLoading,
  errorMsg: state.SignUpState.errorMsg
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  forgotPassword: (data: ForgotPasswordScreenFromData, navigation: any) =>
    dispatch(forgotPassword(data, navigation) as any),
  clearErrorAuth: () => dispatch(clearErrorAuth() as any)
});

const SignupSchema = Yup.object().shape({
  emailId: Yup.string()
    .email("Invalid email")
    .required("Email is required")
});

export class Component extends React.PureComponent<ForgotPasswordScreenProps> {
  state = {
    sendEmail: false
  };

  handleSubmit = values => {
    const { navigation, forgotPassword } = this.props;

    forgotPassword(values, navigation);
  };

  render() {
    const { isLoading, errorMsg, clearErrorAuth } = this.props;

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
          <Text style={styles.title}>{"Forgot password?".toUpperCase()}</Text>
          <Text style={styles.description}>
            Enter the email address you used to register with BrackIt & we will
            email you instructions to reset your password.
          </Text>

          <Formik
            initialValues={{
              emailId: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={this.handleSubmit}
          >
            {(props: any) => {
              const { handleSubmit, errors, touched } = props;

              const formattedErrorString = Object.keys(errors)
                .reduce((acc: Array<string>, key: string) => {
                  const value = (errors as any)[key];
                  if ((touched as any)[key] && acc.indexOf(value) < 0) {
                    acc.push(value);
                  }
                  return acc;
                }, [])
                .join(". ");

              return (
                <View style={styles.form}>
                  {Boolean(formattedErrorString) || errorMsg.length ? (
                    <View style={styles.formErrorContainer}>
                      <Text style={styles.formError}>
                        {formattedErrorString || errorMsg}
                      </Text>
                    </View>
                  ) : null}
                  <TextInputStyled
                    name="emailId"
                    label="email"
                    borderTop={true}
                    formProps={props}
                    keyboardType="email-address"
                  />

                  <ButtonStyled
                    style={styles.btnSubmit}
                    onPress={() => handleSubmit()}
                    text={"Send".toUpperCase()}
                    loading={isLoading}
                  />
                </View>
              );
            }}
          </Formik>

          <View style={styles.createAccountContainer}>
            <TouchableOpacity
              onPress={() => {
                navigate({ routeName: "SignIn" });
                clearErrorAuth();
              }}
            >
              <Text style={styles.createAccountText}>
                Go back to{" "}
                <Text style={styles.createAccountLink}>
                  {"Login".toUpperCase()}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export const ForgotPasswordScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
