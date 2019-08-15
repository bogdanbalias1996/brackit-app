import { NavigationScreenProp, NavigationScreenOptions } from 'react-navigation'
export interface CreatorProposalsScreenStateProps {
    navigation: NavigationScreenProp<any, any>
}

export type CreatorProposalsScreenDispatchProps = {
    setAcceptedProposalUser: (user: any) => void
}

export type CreatorProposalsScreenProps = CreatorProposalsScreenStateProps & CreatorProposalsScreenDispatchProps
