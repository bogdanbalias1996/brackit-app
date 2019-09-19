import { Dispatch } from "redux";
import { ApiOperation } from "../../api/api";
import { request } from "../../api/network";
import { ForgotPasswordScreenFromData } from "./";
import { IAction } from "../../coreTypes";

export const REQUEST_FORGOTPASSWORD_USER = "REQUEST_FORGOTPASSWORD_USER ";
export const requestForgotPassword = (): IAction<void> => {
  return {
    type: REQUEST_FORGOTPASSWORD_USER,
    data: undefined
  };
};

export const RECEIVE_FORGOTPASSWORD_USER = "RECEIVE_FORGOTPASSWORD_USER";
export const receiveForgotPasswordUser = (): IAction<void> => {
  return {
    type: RECEIVE_FORGOTPASSWORD_USER,
    data: undefined
  };
};

export const FAILURE_FORGOTPASSWORD_USER = "FAILURE_FORGOTPASSWORD_USER";
export const failureForgotPassword = (): IAction<void> => {
  return {
    type: FAILURE_FORGOTPASSWORD_USER,
    data: undefined
  };
};

export const forgotPassword = (
  payload: ForgotPasswordScreenFromData,
  setErrors: any,
  navigation: any
) => {
  console.log(payload);
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
        dispatch(failureForgotPassword());
        const {
          error = "The email/password combination are incorrect"
        } = err.response.body;

        setErrors({
          email: error
        });
      });
  };
};
