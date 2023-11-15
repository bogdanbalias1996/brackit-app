import { IAction } from "../../coreTypes";
import { RECEIVE_GET_PROFILE } from "./actions";

export class ProfileState {
  profileInfo: {};

  constructor() {
    this.profileInfo = {};
  }
}

export const initialState = new ProfileState();

export const ProfileReducer = (
  state: ProfileState = initialState,
  action: IAction<any>
): ProfileState => {
  switch (action.type) {
    case RECEIVE_GET_PROFILE:
      return {
        ...state,
        profileInfo: action.data
      };

    default:
      return state;
  }
};
