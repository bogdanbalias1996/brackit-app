
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
export interface PlayScreenStateProps {
    politicianUpdates: Array<ChallengeItem>
}

export type PlayScreenDispatchProps = {}

export type PlayScreenProps = PlayScreenStateProps & PlayScreenDispatchProps
