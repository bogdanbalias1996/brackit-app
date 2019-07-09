import { Dispatch } from 'redux'
import { ApiOperation } from '../../api/api'
import { request } from '../../api/network'
import { IAction } from '../../coreTypes'

export const SET_CHALLENGE_NAME = 'SET_CHALLENGE_NAME'
export const setChallengeName = (data) => {
  return {
    type: SET_CHALLENGE_NAME,
    data
  }
}

