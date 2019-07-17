import { Dispatch } from 'redux'
import { ApiOperation } from '../../api/api'
import { request } from '../../api/network'
import { IAction } from '../../coreTypes'
import { Discussion, IssueDetails } from './'

export const RECEIVE_DESCUSSIONS = 'RECEIVE_DESCUSSIONS'
export const receiveDiscussions = (data: Array<Discussion>): IAction<Array<Discussion>> => {
  return {
    type: RECEIVE_DESCUSSIONS,
    data
  }
}

export const RECEIVE_ISSUE_DETAILES = 'RECEIVE_ISSUE_DETAILES'
export const receiveIssueDetails = (data: IssueDetails): IAction<IssueDetails> => {
  return {
    type: RECEIVE_ISSUE_DETAILES,
    data
  }
}

export const REQUEST_DESCUSSIONS = 'REQUEST_DESCUSSIONS'
export const requestDiscussions = (): IAction<undefined> => {
  return {
    type: REQUEST_DESCUSSIONS,
    data: undefined
  }
}

export const getDiscussions = (issueId: string) => {
  return (dispatch: Dispatch) => {

    dispatch(requestDiscussions())

    request({
      operation: ApiOperation.GetDiscussions,
      params: { issueId }
    })
      .then((res) => {
        dispatch(receiveDiscussions(res))
      })
      .catch((err) => { })
  }
}

export const getIssueDetails = (issueId: string) => {
  return (dispatch: Dispatch) => {
    request({
      operation: ApiOperation.GetIssueDetails,
      params: { issueId }
    })
      .then((res) => {
        dispatch(receiveIssueDetails(res))
      })
      .catch((err) => {
        dispatch(receiveIssueDetails({
          id: '0',
          billSummary: '',
          issueSummary: '',
          discussions: [],
          rate: ''
        }))
        console.log(`Oops. Something goes wrong with 'getIssueDetails' request for issueId: ${issueId}`)
      })
  }
}

export const clearIssueDetails = () => {
  return (dispatch: Dispatch) => {
    dispatch(receiveIssueDetails(null))
  }
}