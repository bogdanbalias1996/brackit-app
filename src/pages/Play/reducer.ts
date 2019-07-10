import { IAction } from "../../coreTypes";
import { SET_CHALLENGE_NAME } from "../PlayStepOne/actions";
import { SET_CHALLENGE_USERS, SET_ALL_CHALLENGE_USERS } from "../PlayStepTwo/actions";
import { SET_CHALLENGE_PLACES, SET_FAVOURITE_PLACE } from "../PlayStepThree/actions";
import { SET_CHALLENGE_DATE } from "../PlayStepFour/actions";
import { SET_CHALLENGE_COINS } from "../PlayStepFive/actions";

export class ChallengeState {
  challengeName: string;
  challengeUsers: any;
  challengePlaces: any;
  favoritePlaces: any;
  challengeDate: any;
  challengeCoins: string;
  isDataLoading: boolean;

  constructor() {
    this.challengeName = "";
    this.challengeUsers = [];
    this.challengePlaces = [];
    this.favoritePlaces = [];
    this.challengeDate = {};
    this.challengeCoins = "";
    this.isDataLoading = false;
  }
}

export const initialState = new ChallengeState();

export const ChallengeReducer = (
  state: ChallengeState = initialState,
  action: IAction<any>
): ChallengeState => {
  switch (action.type) {
    case SET_CHALLENGE_NAME:
      return {
        ...state,
        challengeName: action.data
      };

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

    case SET_ALL_CHALLENGE_USERS:
      return {
        ...state,
        challengeUsers: [...state.challengeUsers, ...action.data]
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

    case SET_FAVOURITE_PLACE:
      const favoritePlaces = state.favoritePlaces.includes(
        action.data
      )
        ? state.favoritePlaces.filter(item => item !== action.data)
        : [...state.favoritePlaces, action.data];
      return {
        ...state,
        favoritePlaces
      };

    case SET_CHALLENGE_DATE:
      return {
        ...state,
        challengeDate: action.data
      };

    case SET_CHALLENGE_COINS:
      return {
        ...state,
        challengeCoins: action.data
      };

    default:
      return state;
  }
};
