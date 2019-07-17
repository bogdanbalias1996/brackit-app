import { Politician } from '../Politicians'

export type PartyDetails = {
  id: number
  logoUrl: string
  name: string
  link: string
  leadership: string
  ideology: string
  political_position: string
}

export type PartyScreenStateProps = {
  party: PartyDetails
  politicians: Array<Politician>
}

export type PartyScreenDispatchProps = {
  getPoliticiansByParty: (partyId: string) => void
  showPoliticianScreen: (politician: Politician) => void
}

export type PartyScreenProps = PartyScreenStateProps & PartyScreenDispatchProps