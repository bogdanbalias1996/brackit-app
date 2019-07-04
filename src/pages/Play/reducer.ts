import { IAction } from "../../coreTypes";
import { SET_CHALLENGE_USERS } from "./actions";

export class ChallengeState {
  challengeUsers: any;
  isDataLoading: boolean;

  constructor() {
    this.challengeUsers = [];
    this.isDataLoading = false;
  }
}

export const initialState = new ChallengeState();

export const ChallengeReducer = (
  state: ChallengeState = initialState,
  action: IAction<any>
): ChallengeState => {
  switch (action.type) {
    case SET_CHALLENGE_USERS:
      const challengeUsers = state.challengeUsers.includes(
        action.data
      )
        ? state.challengeUsers.filter(item => item !== action.data)
        : [...state.challengeUsers, action.data];

      return {
        ...state,
        challengeUsers
      };

    default:
      return state;
  }
};
