import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import { IGlobalState, IAction } from './coreTypes'
import thunk from 'redux-thunk'

import { LoginReducer } from './pages/Login/reducer'
import { FontReducer } from './common/font.reducer'
import { PartiesReducer } from './pages/Parties/reducer'
import { PoliticiansReducer } from './pages/Politicians/reducer'
import { PartyReducer } from './pages/Party/reducer'
import { IssuesReducer } from './pages/Issues/reducer'
import { ChallengeReducer } from './pages/Play/reducer'

const getReducerObject = () => ({
  LoginState: LoginReducer,
  FontState: FontReducer,
  PartiesState: PartiesReducer,
  PoliticiansState: PoliticiansReducer,
  PartyState: PartyReducer,
  IssuesState: IssuesReducer,
  ChallengeState: ChallengeReducer
})

const configureReducers = () => combineReducers<IGlobalState>(getReducerObject())

const rootReducer = (state: IGlobalState, action: IAction<any>): IGlobalState => {
  return configureReducers()(state, action)
}

const store = createStore<IGlobalState, any, any, any>(
  rootReducer as any,
  applyMiddleware(thunk)
)

export const getStore = (): Store<IGlobalState> => {
  if (!store) {
    throw new Error('redux store is not defined, use function withAppStore or withMockStore')
  }
  return store
}
