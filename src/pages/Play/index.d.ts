
export type ChallengeItem = {
    id: string,
    name: string,
    avatar: number,
    avatarRate: number,
    postTime: string,
    postCity: string,
    postRate: number,
    title: string,
    whenText: string,
    whereText: string,
    btnText: string,
    comments: number
}
export type TournamentItem = {
    id: string,
    statusTournament: string,
    title: string,
    whenText: string,
    whereText: string,
    prize: string,
    entryFee: string,
    categories: any
}
export interface PlayScreenStateProps {
    ChallengeItems: Array<ChallengeItem>
    TournamentItems: Array<TournamentItem>
}

export type PlayScreenDispatchProps = {}

export type PlayScreenProps = PlayScreenStateProps & PlayScreenDispatchProps
