import { IAction } from "../../coreTypes";
import { SET_CHALLENGE_NAME } from "../PlayStepOne/actions";
import {
  SET_CHALLENGE_USERS,
  SET_ALL_CHALLENGE_USERS
} from "../PlayStepTwo/actions";
import {
  SET_CHALLENGE_PLACE,
  SET_FAVOURITE_PLACES
} from "../PlayStepThree/actions";
import { SET_CHALLENGE_DATE } from "../PlayStepFour/actions";
import { SET_CHALLENGE_COINS } from "../PlayStepFive/actions";
import {
  CLEAR_CHALLENGE_DATA,
  SET_ACTIVE_TAB,
  RECEIVE_GET_TOURNAMENT_LIST
} from "./actions";
import { SET_ACCEPTED_PROPOSAL_USER } from "../CreatorProposals/actions";

export class ChallengeState {
  challengeName: string;
  challengeUsers: any;
  challengePlace: any;
  favouritePlaces: any;
  challengeDate: string;
  challengeCoins: string;
  isDataLoading: boolean;
  activeTab: number;
  acceptedProposalUser: any;
  tournamentList: any;

  constructor() {
    this.challengeName = "";
    this.challengeUsers = [];
    this.challengePlace = {};
    this.favouritePlaces = [];
    this.challengeDate = "";
    this.challengeCoins = "";
    this.isDataLoading = false;
    this.activeTab = null;
    this.acceptedProposalUser = {};
    this.tournamentList = [];
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
      const challengeUsers = state.challengeUsers.find(
        x => x.id === action.data.id
      )
        ? state.challengeUsers.filter(item => item.id !== action.data.id)
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

    case SET_CHALLENGE_PLACE:
      return {
        ...state,
        challengePlace: action.data
      };

    case SET_FAVOURITE_PLACES:
      const favouritePlaces = state.favouritePlaces.find(
        x => x.id === action.data.id
      )
        ? state.favouritePlaces.filter(item => item.id !== action.data.id)
        : [...state.favouritePlaces, action.data];
      return {
        ...state,
        favouritePlaces
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

    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.data
      };

    case SET_ACCEPTED_PROPOSAL_USER:
      return {
        ...state,
        acceptedProposalUser: action.data
      };

    case CLEAR_CHALLENGE_DATA:
      return new ChallengeState();

    case RECEIVE_GET_TOURNAMENT_LIST:
      return {
        ...state,
        tournamentList: action.data
      };

    default:
      return state;
  }
};
