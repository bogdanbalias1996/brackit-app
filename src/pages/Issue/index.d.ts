import { Issue } from '../Issues/'

export type Discussion = {
  id: string
  author: string
  date: string
  text: string
  type: string
}

export type IssueDetails = {
  id: string
  billSummary: string
  issueSummary: string
  discussions: Array<Discussion>
  rate: string
}

export type IssueStateProps = {
  selectedIssueId: string
  issueDetails: IssueDetails
  issueInfo: Issue
}

export type IssueDispatchProps = {
  getIssueDetails: (id: string) => void
}

export type IssueProps = IssueStateProps & IssueDispatchProps
