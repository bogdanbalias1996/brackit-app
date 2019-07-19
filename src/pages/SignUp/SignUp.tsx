import * as React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { navigate } from "../../navigationService";
import { TextInputPassword } from "../../components/TextInputStyled/TextInputPassword";
import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { Icon } from "../../components/Icon/Icon";

import styles from "./SignUp.styles";
import { colorTextBlue, colorPink } from "../../variables";

export const Component = ({ navigation }): JSX.Element => {
  const handleSubmit = (values, { setErrors }: any) => {
    navigate({ routeName: "Play" });
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
      <Text style={styles.title}>{"Sign Up".toUpperCase()}</Text>
      <Formik
        initialValues={{
          email: "",
          nickname: "",
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
              <TextInputStyled
                name="nickname"
                label="nickname"
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
              />
            </View>
          );
        }}
      </Formik>
      <TouchableOpacity
        style={styles.createAccountContainer}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.createAccountText}>
          Already have an account?{" "}
          <Text style={styles.createAccountLink}>Log In</Text>
        </Text>
      </TouchableOpacity>
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

Component.displayName = "SignUp";

export const SignUpScreen = connect()(Component);
