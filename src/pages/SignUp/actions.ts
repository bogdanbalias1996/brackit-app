import { Dispatch } from "redux";
import { ApiOperation } from "../../api/api";
import { request } from "../../api/network";
import { IAction } from "../../coreTypes";
import { _retrieveData } from "../../common/utils/helpers";
import { navigate } from "../../navigationService";
import { AuthResponse } from "./";
let get = require("lodash.get");

export const CLEAR_ERROR_AUTH = "CLEAR_ERROR_AUTH";
export const clearErrorAuth = () => {
  return {
    type: CLEAR_ERROR_AUTH
  };
};

export const REMOVE_SESSION = "REMOVE_SESSION";
export const removeSession = () => {
  return {
    type: REMOVE_SESSION
  };
};

export const logoutUser = () => {
  return (dispatch: Dispatch) => {
    dispatch(removeSession());
    navigate({ routeName: "SignIn" });
  };
};

export const REQUEST_SIGNUP_USER = "REQUEST_SIGNUP_USER ";
export const requestSignUpUser = () => {
  return {
    type: REQUEST_SIGNUP_USER
  };
};

export const RECEIVE_SIGNUP_USER = "RECEIVE_SIGNUP_USER";
export const receiveSignUpUser = (data): IAction<AuthResponse> => {
  return {
    type: RECEIVE_SIGNUP_USER,
    data
  };
};

export const FAILURE_SIGNUP_USER = "FAILURE_SIGNUP_USER";
export const failureSignUpUser = (data): IAction<string> => {
  return {
    type: FAILURE_SIGNUP_USER,
    data: data
  };
};

export const signUpUser = (payload: any, navigation: any) => {
  return (dispatch: Dispatch) => {
    const { email, password, name } = payload;
    dispatch(requestSignUpUser());
    request({
      operation: ApiOperation.Create,
      variables: {
        email,
        password,
        name
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    })
      .then(async res => {
        dispatch(receiveSignUpUser(res));
        if ((await _retrieveData("isFirst")) === null) {
          navigation.navigate({
            routeName: "ProfileEdit",
            params: { isFirst: true }
          });
        } else {
          navigation.navigate("Profile");
        }
      })
      .catch(err => {
        const error = get(err, `response.body.msg`, "");
        dispatch(failureSignUpUser(error));
      });
  };
};

export const SET_USER_ID = "SET_USER_ID";
export const setUserId = (data): IAction<string> => {
  return {
    type: SET_USER_ID,
    data: data
  };
};
