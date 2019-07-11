export interface PlayStepTwoScreenStateProps {
    data: any
    title: string
    challengeUsers: any
}

export type PlayStepTwoScreenDispatchProps = {
    setChallengeUsers: (user: any) => void
    setAllChallengeUsers: (users: any) => void
    clearChallengeData: () => void
}

export type PlayStepTwoScreenProps = PlayStepTwoScreenStateProps & PlayStepTwoScreenDispatchProps
