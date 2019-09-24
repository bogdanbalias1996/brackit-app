import { IAction } from "../../coreTypes";
import {
  RECEIVE_SIGNUP_USER,
  REMOVE_SESSION,
  REQUEST_SIGNUP_USER,
  FAILURE_SIGNUP_USER,
  CLEAR_ERROR_AUTH,
  SET_USER_ID
} from "./actions";
import {
  RECEIVE_SIGNIN_USER,
  REQUEST_SIGNIN_USER,
  FAILURE_SIGNIN_USER
} from "../SignIn/actions";
import {
  RECEIVE_FORGOTPASSWORD_USER,
  REQUEST_FORGOTPASSWORD_USER,
  FAILURE_FORGOTPASSWORD_USER
} from "../ForgotPassword/actions";
import {
  setLocalStorage,
  clearLocalStorage,
  ACCESS_TOKEN_NAME
} from "../../common/utils/session";

export class SignUpState {
  accessToken: string;
  userId: string;
  isLoading: boolean;
  errorMsg: string;

  constructor() {
    this.accessToken = "";
    this.userId = "";
    this.isLoading = false;
    this.errorMsg = "";
  }
}

export const initialState = new SignUpState();

export const SignUpReducer = (
  state: SignUpState = initialState,
  action: IAction<any>
): SignUpState => {
  switch (action.type) {
    case REQUEST_SIGNUP_USER:
      return {
        ...state,
        isLoading: true
      };

    case FAILURE_SIGNUP_USER:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.data
      };

    case RECEIVE_SIGNUP_USER:
      setLocalStorage(action.data.accessToken, ACCESS_TOKEN_NAME);

      return {
        ...state,
        accessToken: action.data.accessToken,
        userId: action.data.id,
        isLoading: false
      };

    case REQUEST_SIGNIN_USER:
      return {
        ...state,
        isLoading: true
      };

    case FAILURE_SIGNIN_USER:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.data
      };

    case RECEIVE_SIGNIN_USER:
      setLocalStorage(action.data.accessToken, ACCESS_TOKEN_NAME);

      return {
        ...state,
        accessToken: action.data.accessToken,
        userId: action.data.id,
        isLoading: false
      };

    case REQUEST_FORGOTPASSWORD_USER:
      return {
        ...state,
        isLoading: true
      };

    case FAILURE_FORGOTPASSWORD_USER:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.data
      };

    case RECEIVE_FORGOTPASSWORD_USER:
      return {
        ...state,
        isLoading: false
      };

    case SET_USER_ID:
      return {
        ...state,
        userId: action.data
      };

    case REMOVE_SESSION:
      clearLocalStorage();
      return new SignUpState();

    case CLEAR_ERROR_AUTH:
      return {
        ...state,
        errorMsg: ""
      };

    default:
      return state;
  }
};
