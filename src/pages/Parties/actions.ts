import { Dispatch } from 'redux'
import { ApiOperation } from '../../api/api'
import { request } from '../../api/network'
import { IAction } from '../../coreTypes'
import { Party } from './'

export const RECEIVE_PARTIES = 'RECEIVE_PARTIES'
export const receiveParties = (data: Array<Party>): IAction<Array<Party>> => {
  return {
    type: RECEIVE_PARTIES,
    data
  }
}

export const REQUEST_PARTIES = 'REQUEST_PARTIES'
export const requestParties = (): IAction<void> => {
  return {
    type: REQUEST_PARTIES,
    data: undefined
  }
}

export const getParties = () => {
  return (dispatch: Dispatch) => {
    dispatch(requestParties())

    request({ operation: ApiOperation.GetParties })
      .then((res) => {
        dispatch(receiveParties(res))
      })
      .catch((err) => {

      })
  }
}
