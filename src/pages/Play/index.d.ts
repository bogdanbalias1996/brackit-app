import { NavigationScreenProp, NavigationScreenOptions } from 'react-navigation'
export type TournamentItem = {
    id: string,
    avaliableEntries: number,
    entries: number,
    statusTournament: string,
    title: string,
    subTitle: string,
    date: string,
    location: string,
    prize: string,
    singleEntryFee: string,
    doubleEntryFee: string,
    events: any
}
export type LeaderBoardItem = {
    id: string,
    name: string,
    number: string,
    avatar: number,
    avatarRate: number,
    numberPlays: number,
    numberWonPlays: number,
    performance: number,
}
export interface PlayScreenStateProps {
    navigation: NavigationScreenProp<any, any>
    ChallengeItems: Array<ChallengeItem>
    TournamentItems: Array<TournamentItem>
    activeTab: any
}

export type PlayScreenDispatchProps = {
    setActiveTab: (val: any) => void
}

export type PlayScreenProps = PlayScreenStateProps & PlayScreenDispatchProps
