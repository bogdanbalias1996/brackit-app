import { IAction } from '../../coreTypes'

export const SELECT_COUNTRY = 'SELECT_COUNTRY'
export const selectCountry = (data: string): IAction<string> => {
  return {
    type: SELECT_COUNTRY,
    data
  }
}