export type Party = {
  id: number
  logoUrl: string
  name: string
  link: string
  leadership: string
  ideology: string
  political_position: string
}

export type PartiesScreenStateProps = {
  parties: Array<Party>
  isDataLoading: boolean
}

export type PartiesScreenDispatchProps = {
  getParties: () => void,
  receiveParty: (party: Party) => void
}

export type PartiesScreenProps = PartiesScreenStateProps & PartiesScreenDispatchProps
