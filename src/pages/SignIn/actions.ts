import { Dispatch } from "redux";
import { ApiOperation } from "../../api/api";
import { request } from "../../api/network";
import { SignInScreenFromData, AuthResponse } from "./";
import { IAction } from "../../coreTypes";

export const REQUEST_SIGNIN_USER = "REQUEST_SIGNIN_USER ";
export const requestSignInUser = (): IAction<void> => {
  return {
    type: REQUEST_SIGNIN_USER,
    data: undefined
  };
};

export const RECEIVE_SIGNIN_USER = "RECEIVE_SIGNIN_USER";
export const receiveSignInUser = (
  data: AuthResponse
): IAction<AuthResponse> => {
  return {
    type: RECEIVE_SIGNIN_USER,
    data
  };
};

export const FAILURE_SIGNIN_USER = "FAILURE_SIGNIN_USER";
export const failureSignInUser = (): IAction<void> => {
  return {
    type: FAILURE_SIGNIN_USER,
    data: undefined
  };
};

export const signInUser = (
  payload: SignInScreenFromData,
  setErrors: any,
  navigation: any
) => {
  return (dispatch: Dispatch) => {
    const { email, password } = payload;
    dispatch(requestSignInUser());
    request({
      operation: ApiOperation.SignIn,
      variables: {
        email,
        password
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    })
      .then(async res => {
        console.log(res);
        dispatch(receiveSignInUser(res));
        navigation.navigate({ routeName: "Profile" });
      })
      .catch(err => {
        console.log(JSON.stringify(err, null, 2));
        dispatch(failureSignInUser());
        const {
          error = "The email/password combination are incorrect"
        } = err.response.body;

        setErrors({
          email: error,
          password: error
        });
      });
  };
};
