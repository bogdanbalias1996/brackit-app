import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { IGlobalState } from "../../coreTypes";
import { Text, View, Keyboard, Image, TouchableOpacity } from "react-native";
import { LoginScreenProps, LoginScreenFromData } from "./";
import styles from "./Login.styles";
import { loginUser } from "./actions";

import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { TextInputPassword } from "../../components/TextInputStyled/TextInputPassword";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { Icon } from "../../components/Icon/Icon";
import { colorTextBlue, colorPink } from "../../variables";

const mapStateToProps = (state: IGlobalState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginUser: (data: LoginScreenFromData, setErrors: any, navigation: any) =>
    dispatch(loginUser(data, setErrors, navigation) as any)
});

export const Component: React.SFC<LoginScreenProps> = ({
  navigation,
  loginUser
}): JSX.Element => {
  const handleSubmit = (values: LoginScreenFromData, { setErrors }: any) => {
    loginUser(values, setErrors, navigation);
    Keyboard.dismiss();
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required")
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
      <Text style={styles.title}>{"Login".toUpperCase()}</Text>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
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
                <Text style={[styles.btnForgetPasswordText]}>
                  Forgot password ?
                </Text>
              </TouchableOpacity>

              <ButtonStyled
                style={styles.btnSubmit}
                onPress={() => handleSubmit()}
                text={"Log In".toUpperCase()}
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
            <Text style={styles.createAccountLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.socialText}>Connect with social media</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => alert("ok")} style={styles.socialItem}>
          <Icon size={24} name="facebook" color={colorTextBlue} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("ok")} style={styles.socialItem}>
          <Icon size={24} name="google" color={colorPink} />
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

Component.displayName = "LoginScreen";

export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
