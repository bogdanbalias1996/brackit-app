export type Politician = {
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

export type PoliticiansListProps = {
  politicians: Array<Politician>
  onItemPress?: (politician: Politician) => void
}

export type PoliticiansScreenStateProps = {
  politicians: Array<Politician>
  isDataLoading: boolean
}

export type PoliticiansScreenDispatchProps = {
  getPoliticians: () => void
  showPoliticianScreen: (politician: Politician) => void
}

export type PoliticiansScreenProps = PoliticiansScreenStateProps & PoliticiansScreenDispatchProps
