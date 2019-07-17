import { getStore } from '../../configureStore'
import { AsyncStorage } from 'react-native'
import { removeSession } from '../../pages/Login/actions'
import { navigate } from '../../navigationService'

export const ACCESS_TOKEN_NAME = 'access_token'

export const clearLocalStorage = () => {
  AsyncStorage.clear()
}

export const setLocalStorage = (value: any, itemName: string) => {
  try {
    return AsyncStorage.setItem(itemName, JSON.stringify(value))
  } catch (e) {
    console.error('Failed to set item to localStorage:', e)
    return null
  }
}

export const getLocalStorage = async (itemName: string) => {
  try {
    const res = await AsyncStorage.getItem(itemName)

    return JSON.parse(res || 'null') as any
  } catch (e) {
    console.error('Failed to get item from localStorage:', e)
    return null
  }
}

const isTokenExpired = (expiresAt: number): boolean => {
  // TODO: Add proper time zone comparison
  const now = Math.round(Date.now() / 1000)
  return expiresAt < now
}

export const getToken = async () => {
  let accessToken: string | null = ''

  try {
    accessToken = getStore().getState().LoginState.accessToken

    if (!accessToken) {
      const { token = '' } = await getLocalStorage(ACCESS_TOKEN_NAME)
      accessToken = token
    }
  } catch (err) {
    const accessTokenFromLocaleStorage = await getLocalStorage(ACCESS_TOKEN_NAME)

    accessToken = accessTokenFromLocaleStorage ? accessTokenFromLocaleStorage.token : ''
  }

  return accessToken
}

export const authenticate = (): any => {
  const token = getToken()

  // if (!token) {
  //   getStore().dispatch(removeSession())
  //   navigate({ routeName: 'Login' })
  //   return
  // } else {
  //   navigate({ routeName: 'Main' })
  // }
}
