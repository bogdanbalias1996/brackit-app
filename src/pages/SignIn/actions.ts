import { Dispatch } from "redux";
import { ApiOperation } from "../../api/api";
import { request } from "../../api/network";
import { SignInScreenFromData, AuthResponse } from "./";
import { IAction } from "../../coreTypes";
let get = require("lodash.get");

export const REQUEST_SIGNIN_USER = "REQUEST_SIGNIN_USER ";
export const requestSignInUser = () => {
  return {
    type: REQUEST_SIGNIN_USER
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
export const failureSignInUser = (data): IAction<string> => {
  return {
    type: FAILURE_SIGNIN_USER,
    data: data
  };
};

export const signInUser = (payload: SignInScreenFromData, navigation: any) => {
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
        dispatch(receiveSignInUser(res));
        navigation.navigate({ routeName: "Profile" });
      })
      .catch(err => {
        const error = get(err, `response.body.msg`, "");
        dispatch(failureSignInUser(error));
      });
  };
};
