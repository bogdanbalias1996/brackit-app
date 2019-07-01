import { IAction } from '../../coreTypes'
import { Party } from './'
import { RECEIVE_PARTIES, REQUEST_PARTIES } from './actions'

export class PartiesState {
  parties: Array<Party>
  isDataLoading: boolean

  constructor() {
    this.parties = []
    this.isDataLoading = false
  }
}

export const initialState = new PartiesState()

export const PartiesReducer = (state: PartiesState = initialState, action: IAction<any>): PartiesState => {
  switch (action.type) {
    case RECEIVE_PARTIES:
      return {
        ...state,
        isDataLoading: false,
        parties: action.data
      }

    case REQUEST_PARTIES:
      return {
        ...state,
        isDataLoading: true
      }

    default:
      return state
  }
}
