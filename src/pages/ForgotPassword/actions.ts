import { Dispatch } from "redux";
import { ApiOperation } from "../../api/api";
import { request } from "../../api/network";
import { ForgotPasswordScreenFromData } from "./";
import { IAction } from "../../coreTypes";
let get = require("lodash.get");

export const REQUEST_FORGOTPASSWORD_USER = "REQUEST_FORGOTPASSWORD_USER ";
export const requestForgotPassword = () => {
  return {
    type: REQUEST_FORGOTPASSWORD_USER
  };
};

export const RECEIVE_FORGOTPASSWORD_USER = "RECEIVE_FORGOTPASSWORD_USER";
export const receiveForgotPasswordUser = () => {
  return {
    type: RECEIVE_FORGOTPASSWORD_USER
  };
};

export const FAILURE_FORGOTPASSWORD_USER = "FAILURE_FORGOTPASSWORD_USER";
export const failureForgotPassword = (data): IAction<string> => {
  return {
    type: FAILURE_FORGOTPASSWORD_USER,
    data: data
  };
};

export const forgotPassword = (
  payload: ForgotPasswordScreenFromData,
  navigation: any
) => {
  return (dispatch: Dispatch) => {
    const { emailId } = payload;
    dispatch(requestForgotPassword());
    request({
      operation: ApiOperation.ForgotPassword,
      variables: {
        emailId
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    })
      .then(res => {
        dispatch(receiveForgotPasswordUser());
        navigation.navigate({
          routeName: "ResetPassword",
          params: { emailId: emailId }
        });
      })
      .catch(err => {
        const error = get(err, `response.body.msg`, "");
        dispatch(failureForgotPassword(error));
      });
  };
};
