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

export const SET_FAVOURITE_PLACE = 'SET_FAVOURITE_PLACE'
export const setFavouritePlace = (data) => {
    return {
        type: SET_FAVOURITE_PLACE,
        data
    }
}

