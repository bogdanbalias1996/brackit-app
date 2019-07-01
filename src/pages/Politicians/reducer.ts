import { IAction } from '../../coreTypes'
import { Politician } from './'
import { PoliticianUpdate } from '../Politician/'
import {
  RECEIVE_POLITICIANS,
  REQUEST_POLITICIANS,
  SELECT_POLITICIAN
} from './actions'

import { RECEIVE_POLITICIAN_UPDATES, REQUEST_POLITICIAN_UPDATES } from '../Politician/actions'

export class PoliticiansState {
  politicians: Array<Politician>
  isDataLoading: boolean
  isPoliticianUpdatesLoading: boolean
  selectedPoliticianId: string
  politicianUpdates: Array<PoliticianUpdate>

  constructor() {
    this.politicians = []
    this.isDataLoading = false
    this.isPoliticianUpdatesLoading = true
    this.selectedPoliticianId = ''
    this.politicianUpdates = []
  }
}

export const initialState = new PoliticiansState()

export const PoliticiansReducer = (state: PoliticiansState = initialState, action: IAction<any>): PoliticiansState => {
  switch (action.type) {
    case RECEIVE_POLITICIANS:
      return {
        ...state,
        isDataLoading: false,
        politicians: action.data
      }

    case REQUEST_POLITICIANS:
      return {
        ...state,
        isDataLoading: true
      }

    case SELECT_POLITICIAN:
      return {
        ...state,
        selectedPoliticianId: action.data
      }

    case REQUEST_POLITICIAN_UPDATES:
      return {
        ...state,
        isPoliticianUpdatesLoading: true
      }

    case RECEIVE_POLITICIAN_UPDATES:
      return {
        ...state,
        isPoliticianUpdatesLoading: false,
        politicianUpdates: action.data
      }

    default:
      return state
  }
}
