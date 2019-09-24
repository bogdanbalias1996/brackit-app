import { Dispatch } from "redux";
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
export const receiveGetTournamentList = (data, page) => {
  return {
    type: RECEIVE_GET_TOURNAMENT_LIST,
    data: data,
    page: page
  };
};

export const getTournamentList = (page: any) => {
  return (dispatch: Dispatch) => {
    request({
      operation: ApiOperation.GetTournamentList,
      variables: {
        first: page,
        max: 10
      }
    })
      .then(res => {
        dispatch(receiveGetTournamentList(res, page));
      })
      .catch(err => {
        console.log(JSON.stringify(err, null, 2));
      });
  };
};
