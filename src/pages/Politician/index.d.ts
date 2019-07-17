export type PoliticianDetails = {
  id: string
  avatarUrl: string
  name: string
  description: string
  text: string
  likes: number
  dislikes: number
  partyLogoUrl: string
  partyName: string
}

export type PoliticianUpdate =  {
  id: string
  tagText: string
  tagType: string
  date: string
  text: string
  quoteText: string
  link: string
  reactions: {}
}

export type PoliticianStateProps = {
  politicianUpdates: Array<PoliticianUpdate>
  isPoliticianUpdatesLoading: boolean
}

export type PoliticianDispatchProps = {
  getPoliticianUpdates: (politicianId: string) => void
}

export type PoliticianProps = PoliticianStateProps & PoliticianDispatchProps