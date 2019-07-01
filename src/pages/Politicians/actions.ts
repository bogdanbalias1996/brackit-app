import { Dispatch } from 'redux'
import { ApiOperation } from '../../api/api'
import { request } from '../../api/network'
import { IAction } from '../../coreTypes'
import { Politician } from './'
import { navigate } from '../../navigationService'

export const RECEIVE_POLITICIANS = 'RECEIVE_POLITICIANS'
export const receivePoliticians = (data: Array<Politician>): IAction<Array<Politician>> => {
  return {
    type: RECEIVE_POLITICIANS,
    data
  }
}

export const REQUEST_POLITICIANS = 'REQUEST_POLITICIANS'
export const requestPoliticians = (): IAction<void> => {
  return {
    type: REQUEST_POLITICIANS,
    data: undefined
  }
}

export const SELECT_POLITICIAN = 'SELECT_POLITICIAN'
export const selectPolitician = (data: string): IAction<string> => {
  return {
    type: SELECT_POLITICIAN,
    data
  }
}

export const showPoliticianScreen = (politician: Politician) => {
  return (dispatch: Dispatch) => {
    navigate({ routeName: 'Politician', params: politician })
  }
}

export const getPoliticians = () => {
  return (dispatch: Dispatch) => {
    dispatch(requestPoliticians())

    request({ operation: ApiOperation.GetPoliticians })
      .then((res) => {
        dispatch(receivePoliticians(res))
      })
      .catch((err) => {

      })
  }
}
