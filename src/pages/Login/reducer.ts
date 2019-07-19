import { IAction } from '../../coreTypes'
import {
  RECEIVE_LOGIN_USER,
  REMOVE_SESSION
} from './actions'
import {
  setLocalStorage,
  clearLocalStorage,
  ACCESS_TOKEN_NAME
} from '../../common/utils/session'

export class LoginState {
  accessToken: string
  firstName: string
  lastName: string
  avatar: string
  email: string
  roles: Array<string>
  permissions: Array<string>
  isFetching: boolean

  constructor() {
    this.accessToken = ''
    this.firstName = ''
    this.lastName = ''
    this.avatar = ''
    this.email = ''
    this.roles = []
    this.permissions = []
    this.isFetching = false
  }
}

export const initialState = new LoginState()

export const LoginReducer = (state: LoginState = initialState, action: IAction<any>): LoginState => {
  switch (action.type) {
    case RECEIVE_LOGIN_USER:
      const { accessToken } = action.data
      const {
        sub: email = '',
        firstName = 'Taras',
        lastName = 'Tarasiv',
        avatar = ''
      } = {}

      setLocalStorage(action.data, ACCESS_TOKEN_NAME)

      return {
        ...state,
        email,
        firstName,
        lastName,
        avatar,
        accessToken,
        isFetching: false
      }

    case REMOVE_SESSION:
      clearLocalStorage()
      return new LoginState()

    default:
      return state
  }
}
