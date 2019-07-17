import { IAction } from '../../coreTypes'
import { PartyDetails } from './'
import { Politician } from '../Politicians'
import {
  RECEIVE_PARTY,
  RECEIVE_POLITICIANS_BY_PARTY
} from './actions'

export class PartyState {
  party: PartyDetails
  politicians: Array<Politician>

  isDataLoading: boolean

  constructor() {
    this.party = null
    this.politicians = []
    this.isDataLoading = false
  }
}

export const initialState = new PartyState()

export const PartyReducer = (state: PartyState = initialState, action: IAction<any>): PartyState => {
  switch (action.type) {
    case RECEIVE_PARTY:
      return {
        ...state,
        isDataLoading: false,
        party: action.data
      }

    case RECEIVE_POLITICIANS_BY_PARTY:
      return {
        ...state,
        politicians: action.data
      }

    default:
      return state
  }
}
