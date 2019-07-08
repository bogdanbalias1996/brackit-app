import { IAction } from "../../coreTypes";
import { SET_CHALLENGE_USERS } from "../PlayStepTwo/actions";
import { SET_CHALLENGE_PLACES } from "../PlayStepThree/actions";

export class ChallengeState {
  challengeUsers: any;
  challengePlaces: any;
  isDataLoading: boolean;

  constructor() {
    this.challengeUsers = [];
    this.challengePlaces = [];
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

    case SET_CHALLENGE_PLACES:
      const challengePlaces = state.challengePlaces.includes(
        action.data
      )
        ? state.challengePlaces.filter(item => item !== action.data)
        : [...state.challengePlaces, action.data];

      return {
        ...state,
        challengePlaces
      };

    default:
      return state;
  }
};
