import { Dispatch } from 'redux'
import { ApiOperation } from '../../api/api'
import { request } from '../../api/network'
import { IAction } from '../../coreTypes'
import { Issue, IssueTypes } from './'

export const RECEIVE_ISSUES = 'RECEIVE_ISSUES'
export const receiveIssues = (data: Array<Issue>): IAction<Array<Issue>> => {
  return {
    type: RECEIVE_ISSUES,
    data
  }
}

export const SELECT_ISSUE = 'SELECT_ISSUE'
export const selectIssue = (data: string): IAction<string> => {
  return {
    type: SELECT_ISSUE,
    data
  }
}

export const FILTER_ISSUES = 'FILTER_ISSUES'
export const filterIssues = (data: IssueTypes): IAction<IssueTypes> => {
  return {
    type: FILTER_ISSUES,
    data
  }
}

export const getIssues = () => {
  return (dispatch: Dispatch) => {
    request({ operation: ApiOperation.GetIssues })
      .then((res) => {
        dispatch(receiveIssues(res))
      })
      .catch((err) => {
        console.log(`Oops. Something goes wrong with 'getIssues' request.`)
      })
  }
}
