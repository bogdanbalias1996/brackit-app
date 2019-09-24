import { Dispatch } from "redux";
import { ApiOperation } from "../../api/api";
import { request } from "../../api/network";
import { IAction } from "../../coreTypes";
import { Profile } from "./";

export const RECEIVE_GET_PROFILE = "RECEIVE_GET_PROFILE";
export const receiveGetProfile = (data): IAction<Profile> => {
  return {
    type: RECEIVE_GET_PROFILE,
    data: data
  };
};

export const getProfile = (payload: string) => {
  return (dispatch: Dispatch) => {
    request({
      operation: ApiOperation.GetProfile,
      params: {
        userId: payload
      }
    })
      .then(res => {
        dispatch(receiveGetProfile(res));
      })
      .catch(err => {
        console.log(JSON.stringify(err, null, 2));
      });
  };
};
