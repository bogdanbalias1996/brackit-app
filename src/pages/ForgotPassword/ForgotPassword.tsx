import * as React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./ForgotPassword.styles";

import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { navigate } from "../../navigationService";

export class Component extends React.PureComponent {
  state = {
    sendEmail: false
  };

  handleSubmit = (values, { setErrors }: any) => {
    this.setState({ sendEmail: !this.state.sendEmail });
  };

  render() {
    const { sendEmail } = this.state;
    const SignupSchema = Yup.object().shape({
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required")
    });

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
        {sendEmail ? (
          <View style={{ width: "100%" }}>
            <Text style={styles.title}>{"Reset password".toUpperCase()}</Text>
            <Text style={styles.description}>
            We have sent an email to{" "}
              <Text style={styles.createAccountLink}>brackit@gmail.com</Text>.
              Please click the reset password link to set your new password
            </Text>
            <ButtonStyled
              style={styles.btnSubmit}
              onPress={() => {
                navigate({ routeName: "Login" });
              }}
              text={"Back to login".toUpperCase()}
            />

            <View style={styles.createAccountContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigate({ routeName: "Login" });
                }}
              >
                <Text style={styles.resetText}>
                  Didn’t receive the email yet? Please check your spam folder.{" "}
                  <Text style={styles.createAccountLink}>{'Resend'.toUpperCase()}</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ width: "100%" }}>
            <Text style={styles.title}>{"Forgot password?".toUpperCase()}</Text>
            <Text style={styles.description}>
              Enter the email address you used to register with BrackIt & we
              will email you instructions to reset your password.
            </Text>

            <Formik
              initialValues={{
                email: "",
                password: ""
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
                    {Boolean(formattedErrorString) && (
                      <View style={styles.formErrorContainer}>
                        <Text style={styles.formError}>
                          {formattedErrorString}
                        </Text>
                      </View>
                    )}
                    <TextInputStyled
                      name="email"
                      label="email"
                      borderTop={true}
                      formProps={props}
                      keyboardType="email-address"
                    />

                    <ButtonStyled
                      style={styles.btnSubmit}
                      onPress={() => handleSubmit()}
                      text={"Send".toUpperCase()}
                    />
                  </View>
                );
              }}
            </Formik>

            <View style={styles.createAccountContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigate({ routeName: "Login" });
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
        )}
      </KeyboardAwareScrollView>
    );
  }
}

export const ForgotPasswordScreen = connect()(Component);
