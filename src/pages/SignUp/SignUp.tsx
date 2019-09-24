import * as React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dispatch } from "redux";

import { SingUpScreenProps, SingUpScreenFromData } from "./";
import { TextInputPassword } from "../../components/TextInputStyled/TextInputPassword";
import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { signUpUser, clearErrorAuth } from "./actions";
import styles from "./SignUp.styles";

const mapStateToProps = state => ({
  isLoading: state.SignUpState.isLoading,
  errorMsg: state.SignUpState.errorMsg
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signUpUser: (data: SingUpScreenFromData, navigation: any) =>
    dispatch(signUpUser(data, navigation) as any),
  clearErrorAuth: () => dispatch(clearErrorAuth() as any)
});

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required")
});

export class Component extends React.PureComponent<SingUpScreenProps> {
  handleSubmit = async values => {
    const { navigation, signUpUser } = this.props;

    signUpUser(values, navigation);
  };

  render() {
    const { navigation, isLoading, errorMsg, clearErrorAuth } = this.props;

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
        <Text style={styles.title}>{"Sign Up".toUpperCase()}</Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: ""
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
                  borderTop={true}
                  name="email"
                  label="email"
                  keyboardType="email-address"
                  formProps={props}
                />
                <TextInputStyled
                  name="name"
                  label="full name"
                  formProps={props}
                />

                <TextInputPassword
                  name="password"
                  label="password"
                  formProps={props}
                />

                <ButtonStyled
                  style={styles.btnSubmit}
                  onPress={() => handleSubmit()}
                  text={"Sign Up".toUpperCase()}
                  loading={isLoading}
                />
              </View>
            );
          }}
        </Formik>
        <TouchableOpacity
          style={styles.createAccountContainer}
          onPress={() => {
            navigation.navigate("SignIn");
            clearErrorAuth();
          }}
        >
          <Text style={styles.createAccountText}>
            Already have an account?{" "}
            <Text style={styles.createAccountLink}>
              {"Login".toUpperCase()}
            </Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }
}

export const SignUpScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
