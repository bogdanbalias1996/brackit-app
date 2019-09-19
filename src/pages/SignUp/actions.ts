import { Dispatch } from "redux";
import { ApiOperation } from "../../api/api";
import { request } from "../../api/network";
import { IAction } from "../../coreTypes";
import { _retrieveData } from "../../common/utils/helpers";
import { navigate } from "../../navigationService";

export const REMOVE_SESSION = "REMOVE_SESSION";
export const removeSession = (): IAction<void> => {
  return {
    type: REMOVE_SESSION,
    data: undefined
  };
};

export const logoutUser = () => {
  return (dispatch: Dispatch) => {
    dispatch(removeSession());
    navigate({ routeName: "Login" });
  };
};

export const REQUEST_SIGNUP_USER = "REQUEST_SIGNUP_USER ";
export const requestSignUpUser = (): IAction<void> => {
  return {
    type: REQUEST_SIGNUP_USER,
    data: undefined
  };
};

export const RECEIVE_SIGNUP_USER = "RECEIVE_SIGNUP_USER";
export const receiveSignUpUser = (data): IAction<void> => {
  return {
    type: RECEIVE_SIGNUP_USER,
    data
  };
};

export const FAILURE_SIGNUP_USER = "FAILURE_SIGNUP_USER";
export const failureSignUpUser = (): IAction<void> => {
  return {
    type: FAILURE_SIGNUP_USER,
    data: undefined
  };
};

export const signUpUser = (payload: any, setErrors: any, navigation: any) => {
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
        dispatch(failureSignUpUser());
        const {
          msg = "The email/password combination are incorrect"
        } = err.response.body;

        setErrors({
          email: msg,
          password: msg
        });
      });
  };
};
