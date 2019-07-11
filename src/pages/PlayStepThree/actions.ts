import { Dispatch } from 'redux'
import { ApiOperation } from '../../api/api'
import { request } from '../../api/network'
import { IAction } from '../../coreTypes'

export const SET_CHALLENGE_PLACE = 'SET_CHALLENGE_PLACE'
export const setChallengePlace = (data) => {
    return {
        type: SET_CHALLENGE_PLACE,
        data
    }
}

export const SET_FAVOURITE_PLACES = 'SET_FAVOURITE_PLACES'
export const setFavouritePlaces = (data) => {
    return {
        type: SET_FAVOURITE_PLACES,
        data
    }
}

