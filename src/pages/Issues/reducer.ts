import { IAction } from '../../coreTypes'
import { Issue, IssueTypes } from './'
import { Discussion, IssueDetails } from '../Issue'
import {
  RECEIVE_ISSUES,
  SELECT_ISSUE,
  FILTER_ISSUES
} from './actions'
import {
  RECEIVE_DESCUSSIONS,
  REQUEST_DESCUSSIONS,
  RECEIVE_ISSUE_DETAILES
} from '../Issue/actions'

export class IssuesState {
  issues: Array<Issue>
  isDataLoading: boolean
  isDiscussionsLoading: boolean
  discussions: Array<Discussion>
  selectedIssueId: string
  issueDetails: IssueDetails
  filteredBy: IssueTypes

  constructor() {
    this.issues = []
    this.isDataLoading = true
    this.discussions = []
    this.isDiscussionsLoading = false
    this.selectedIssueId = ''
    this.issueDetails = null
    this.filteredBy = 'popular'
  }
}

export const initialState = new IssuesState()

export const IssuesReducer = (state: IssuesState = initialState, action: IAction<any>): IssuesState => {
  switch (action.type) {
    case RECEIVE_ISSUES:
      return {
        ...state,
        isDataLoading: false,
        issues: action.data
      }

    case RECEIVE_ISSUE_DETAILES:
      return {
        ...state,
        issueDetails: action.data
      }

    case REQUEST_DESCUSSIONS:
      return {
        ...state,
        isDiscussionsLoading: true
      }

    case RECEIVE_DESCUSSIONS:
      return {
        ...state,
        isDiscussionsLoading: false,
        discussions: action.data
      }

    case SELECT_ISSUE:
      return {
        ...state,
        selectedIssueId: action.data
      }

    case FILTER_ISSUES:
      return {
        ...state,
        filteredBy: action.data
      }

    default:
      return state
  }
}
