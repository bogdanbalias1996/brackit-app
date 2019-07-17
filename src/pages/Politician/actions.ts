import { Dispatch } from 'redux'
import { ApiOperation } from '../../api/api'
import { request } from '../../api/network'
import { IAction } from '../../coreTypes'

import { PoliticianDetails } from './'
import { Politician } from '../Politicians'

export const RECEIVE_POLITICIAN = 'RECEIVE_POLITICIAN'
export const receivePolitician = (data: PoliticianDetails): IAction<PoliticianDetails> => {
  return {
    type: RECEIVE_POLITICIAN,
    data
  }
}

export const REQUEST_POLITICIAN_UPDATES = 'REQUEST_POLITICIAN_UPDATES'
export const requestPoliticianUpdates = (): IAction<undefined> => {
  return {
    type: REQUEST_POLITICIAN_UPDATES,
    data: undefined
  }
}

export const RECEIVE_POLITICIAN_UPDATES = 'RECEIVE_POLITICIAN_UPDATES'
export const receivePoliticianUpdates = (data: PoliticianDetails): IAction<PoliticianDetails> => {
  return {
    type: RECEIVE_POLITICIAN_UPDATES,
    data
  }
}

export const getPoliticianUpdates = (politicianId: string) => {
  return (dispatch: Dispatch) => {
    request({
      operation: ApiOperation.GetPoliticianUpdates,
      params: { politicianId }
    })
      .then((res) => {
        dispatch(receivePoliticianUpdates(res))
      })
      .catch((err) => {})
  }
}