import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Text, View, Keyboard, Image, TouchableOpacity } from "react-native";

import { SignInScreenProps, SignInScreenFromData } from "./";
import styles from "./SignIn.styles";
import { signInUser } from "./actions";
import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { TextInputPassword } from "../../components/TextInputStyled/TextInputPassword";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";

const mapStateToProps = state => ({
  isLoading: state.SignUpState.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signInUser: (data: SignInScreenFromData, setErrors: any, navigation: any) =>
    dispatch(signInUser(data, setErrors, navigation) as any)
});

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required")
});

export class Component extends React.PureComponent<SignInScreenProps> {
  handleSubmit = (values: SignInScreenFromData, { setErrors }: any) => {
    const { navigation, signInUser } = this.props;

    signInUser(values, setErrors, navigation);
    Keyboard.dismiss();
  };

  render() {
    const { navigation, isLoading } = this.props;
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
        <Text style={styles.title}>{"Login".toUpperCase()}</Text>
        <Formik
          initialValues={{
            email: "prashanth238@gmail.com",
            password: "testing"
          }}
          validationSchema={SignupSchema}
          onSubmit={this.handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
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
                    <Text style={styles.formError}>{formattedErrorString}</Text>
                  </View>
                )}
                <TextInputStyled
                  borderTop={true}
                  name="email"
                  label="email"
                  keyboardType="email-address"
                  formProps={props}
                />
                <TextInputPassword
                  name="password"
                  label="password"
                  formProps={props}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  <Text style={styles.btnForgetPasswordText}>
                    Forgot password ?
                  </Text>
                </TouchableOpacity>

                <ButtonStyled
                  style={styles.btnSubmit}
                  onPress={() => handleSubmit()}
                  text={"Log In".toUpperCase()}
                  loading={isLoading}
                />
              </View>
            );
          }}
        </Formik>
        <View style={styles.createAccountContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.createAccountText}>
              Don’t have an account?{" "}
              <Text style={styles.createAccountLink}>
                {"Sign Up".toUpperCase()}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export const SignInScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
