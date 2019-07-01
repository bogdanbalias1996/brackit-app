import { LoginState } from './pages/Login/reducer'
import { FontState } from './common/font.reducer'
import { FeedState } from './pages/Feed/reducer'
import { PartiesState } from './pages/Parties/reducer'
import { PoliticiansState } from './pages/Politicians/reducer'
import { PartyState } from './pages/Party/reducer'
import { IssuesState } from './pages/Issues/reducer'
import { ProfileState } from './pages/Profile/reducer'

export interface IGlobalState {
  LoginState: LoginState
  FontState: FontState
  FeedState: FeedState
  PartiesState: PartiesState
  PoliticiansState: PoliticiansState
  PartyState: PartyState
  IssuesState: IssuesState
  ProfileState: ProfileState
}

export interface IAction<T> {
  type: string
  data: T
}

export type ObjectWithStrings = { [key: string]: string }

