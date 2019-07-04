export interface PlayStepTwoScreenStateProps {
    data: any
    title: string
    challengeUsers: any
}

export type PlayStepTwoScreenDispatchProps = {
    setChallengeUsers: (userId: string) => void
}

export type PlayStepTwoScreenProps = PlayStepTwoScreenStateProps & PlayStepTwoScreenDispatchProps
