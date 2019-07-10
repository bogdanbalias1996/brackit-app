export type ChallengeItem = {
    id: string,
    name: string,
    avatar: number,
    avatarRate: number,
    avatarStatus: string,
    postTime: string,
    postCity: string,
    coins: number,
    title: string,
    whenText: string,
    whereText: string,
    btnText: string,
    shares: number,
    views: number,
    comments: number
}
export type TournamentItem = {
    id: string,
    avaliableEntries: number,
    entries: number,
    statusTournament: string,
    title: string,
    subTitle: string,
    whenText: string,
    whereText: string,
    prize: string,
    singleEntryFee: string,
    doubleEntryFee: string,
    categories: any
}
export interface PlayScreenStateProps {
    ChallengeItems: Array<ChallengeItem>
    TournamentItems: Array<TournamentItem>
}

export type PlayScreenDispatchProps = {}

export type PlayScreenProps = PlayScreenStateProps & PlayScreenDispatchProps
