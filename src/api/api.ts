import { SuperAgentRequest } from 'superagent'

export enum ApiMethod {
  UNKNOWN = 1,
  GET,
  POST,
  PUT,
  PATCH,
  DELETE
}

export enum ApiOperation {
  Login,
  GetParties,
  GetPoliticians,
  GetPoliticiansByParty,
  GetPoliticianUpdates,
  GetIssues,
  GetDiscussions,
  GetIssueDetails,
  GetUserActivities,
  GetUserAchievements,
  GetUserFeed
}

export interface INetwork<C> {
  getHttpInstance: (config: C) => SuperAgentRequest
  request: <T, U>(operation: T, params?: Object, data?: U, urlParams?: Object) => Promise<any>
}

export interface IApi<U> {
  readonly operation: U
  readonly params: Object | undefined
  readonly data: any | undefined
  readonly urlParams: Object | undefined
  readonly variables: any
  getMethod: () => ApiMethod
  getUrl: () => string
  getParams: () => Object | undefined
  getData: () => any | undefined
  isProtected: () => boolean
}

export interface IError {
  status: number
  code: number[]
  title: string
  details: any
  chainedErrors: any
}

export interface ICitiznApi {
  operation: ApiOperation
  params?: Object | undefined
  data?: any
  urlParams?: Object
  headers?: Object
  queryType?: string
  variables?: any
}

export class CitiznApi implements IApi<ApiOperation> {
  readonly operation: ApiOperation
  readonly params: Object | undefined
  readonly data: any | undefined
  readonly urlParams: Object | undefined
  readonly queryType: string | undefined
  readonly variables: any
  readonly headers: Object | undefined

  constructor(options: ICitiznApi) {
    const { operation, params, data, urlParams, queryType, variables, headers } = options

    this.operation = operation
    this.params = params
    this.data = data
    this.urlParams = urlParams
    this.queryType = queryType
    this.variables = variables
    this.headers = headers
  }

  getMethod(): ApiMethod {
    switch (this.operation) {
      case ApiOperation.Login:
        return ApiMethod.POST
      case ApiOperation.GetParties:
      case ApiOperation.GetPoliticians:
      case ApiOperation.GetPoliticiansByParty:
      case ApiOperation.GetPoliticianUpdates:
      case ApiOperation.GetIssues:
      case ApiOperation.GetDiscussions:
      case ApiOperation.GetIssueDetails:
      case ApiOperation.GetUserActivities:
      case ApiOperation.GetUserAchievements:
      case ApiOperation.GetUserFeed:
        return ApiMethod.GET
      default:
        return ApiMethod.UNKNOWN
    }
  }

  getUrl(): string {
    const host = 'http://private-09f82-brackit.apiary-mock.com'
    const {
      partyId,
      politicianId,
      issueId,
      userId
    } = (this.getParams() || {}) as any

    switch (this.operation) {
      case ApiOperation.Login:
        return `${host}/auth`

      case ApiOperation.GetParties:
        return `${host}/parties`
      case ApiOperation.GetPoliticiansByParty:
        return `${host}/parties/${partyId}/politicians`

      case ApiOperation.GetPoliticians:
        return `${host}/politicians`
      case ApiOperation.GetPoliticianUpdates:
        return `${host}/politicians/${politicianId}/updates`

      case ApiOperation.GetIssues:
        return `${host}/issues`
      case ApiOperation.GetDiscussions:
        return `${host}/issues/${issueId}/discussions`
      case ApiOperation.GetIssueDetails:
        return `${host}/issues/${issueId}`

      case ApiOperation.GetUserActivities:
        return `${host}/users/${userId}/activities`
      case ApiOperation.GetUserAchievements:
        return `${host}/users/${userId}/achievements`
      case ApiOperation.GetUserFeed:
        return `${host}/users/${userId}/feed`

      default:
        return ''
    }
  }

  getParams(): Object | undefined {
    return this.params
  }

  getData(): any | undefined {
    return this.variables
  }

  getUrlParams(): Object {
    return this.urlParams || {}
  }

  isProtected(): boolean {
    switch (this.operation) {
      case ApiOperation.Login:
        return false
      case ApiOperation.GetParties:
      case ApiOperation.GetPoliticiansByParty:
      case ApiOperation.GetPoliticians:
      case ApiOperation.GetPoliticianUpdates:
      case ApiOperation.GetIssues:
      case ApiOperation.GetIssueDetails:
      case ApiOperation.GetUserActivities:
      case ApiOperation.GetUserAchievements:
      case ApiOperation.GetUserFeed:
        return true
      default:
        return false
    }
  }

  getHeaders(): Object {
    return this.headers || {}
  }
}
