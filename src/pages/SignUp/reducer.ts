import { IAction } from "../../coreTypes";
import {
  RECEIVE_SIGNUP_USER,
  REMOVE_SESSION,
  REQUEST_SIGNUP_USER,
  FAILURE_SIGNUP_USER
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

  constructor() {
    this.accessToken = "";
    this.userId = "";
    this.isLoading = false;
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
        isLoading: false
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
        isLoading: false
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
        isLoading: false
      };

    case RECEIVE_FORGOTPASSWORD_USER:
      return {
        ...state,
        isLoading: false
      };

    case REMOVE_SESSION:
      clearLocalStorage();
      return new SignUpState();

    default:
      return state;
  }
};
