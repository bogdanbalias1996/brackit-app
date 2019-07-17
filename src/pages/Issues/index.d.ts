import { Tag } from '../../components/Tags'

export type Issue = {
  id: string
  type: IssueTypes
  author: string
  ref: string
  title: string
  text: string
  tags: Array<Tag>
  reactions: {}
}

export type IssueTypes = 'popular' | 'new' | 'new_legislation'

export type IssuesStateProps = {
  issues: Array<Issue>
  isDataLoading: boolean
  filteredBy: IssueTypes
}
export type IssuesDispatchProps = {
  getIssues: () => void
  selectIssue: (id: string) => void
}
export type IssuesProps = IssuesStateProps & IssuesDispatchProps