import { Dispatch } from 'redux'
import { ApiOperation } from '../../api/api'
import { request } from '../../api/network'
import { IAction } from '../../coreTypes'
import { PartyDetails } from './'
import { Politician } from '../Politicians'

export const RECEIVE_PARTY = 'RECEIVE_PARTY'
export const receiveParty = (data: PartyDetails): IAction<PartyDetails> => {
  return {
    type: RECEIVE_PARTY,
    data
  }
}

export const RECEIVE_POLITICIANS_BY_PARTY = 'RECEIVE_POLITICIANS_BY_PARTY'
export const receivePoliticiansByParty = (data: Array<Politician>): IAction<Array<Politician>> => {
  return {
    type: RECEIVE_POLITICIANS_BY_PARTY,
    data
  }
}

export const getPoliticiansByParty = (partyId: string) => {
  return (dispatch: Dispatch) => {
    request({
      operation: ApiOperation.GetPoliticiansByParty,
      params: { partyId }
    })
      .then((res) => {
        dispatch(receivePoliticiansByParty(res))
      })
      .catch((err) => {

      })
  }
}