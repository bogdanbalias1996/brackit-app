import { Dispatch } from 'redux'
import { ApiOperation } from '../../api/api'
import { request } from '../../api/network'
import { IAction } from '../../coreTypes'

export const SET_CHALLENGE_PLACES = 'SET_CHALLENGE_PLACES'
export const setChallengePlaces = (data) => {
    return {
        type: SET_CHALLENGE_PLACES,
        data
    }
}

