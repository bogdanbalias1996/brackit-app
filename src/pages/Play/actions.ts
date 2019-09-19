import { Dispatch } from "redux";
import { IAction } from "../../coreTypes";
import { ApiOperation } from "../../api/api";
import { request } from "../../api/network";

export const CLEAR_CHALLENGE_DATA = "CLEAR_CHALLENGE_DATA";
export const clearChallengeData = () => {
  return {
    type: CLEAR_CHALLENGE_DATA
  };
};

export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
export const setActiveTab = data => {
  return {
    type: SET_ACTIVE_TAB,
    data
  };
};

export const RECEIVE_GET_TOURNAMENT_LIST = "RECEIVE_GET_TOURNAMENT_LIST";
export const receiveGetTournamentList = (data): IAction<void> => {
  return {
    type: RECEIVE_GET_TOURNAMENT_LIST,
    data: data
  };
};

export const getTournamentList = (page: any) => {
  return (dispatch: Dispatch) => {
    request({
      operation: ApiOperation.GetTournamentList,
      params: {
        page: page
      }
    })
      .then(res => {
        dispatch(receiveGetTournamentList(res));
      })
      .catch(err => {
        console.log(JSON.stringify(err, null, 2));
      });
  };
};
