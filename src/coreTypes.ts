import { LoginState } from './pages/Login/reducer'
import { FontState } from './common/font.reducer'
import { ChallengeState } from './pages/Play/reducer'

export interface IGlobalState {
  LoginState: LoginState
  FontState: FontState
  ChallengeState: ChallengeState
}

export interface IAction<T> {
  type: string
  data: T
}

export type ObjectWithStrings = { [key: string]: string }

