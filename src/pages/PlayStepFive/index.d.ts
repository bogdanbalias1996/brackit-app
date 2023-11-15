export interface PlayStepFiveScreenStateProps {
    challengeCoins: string
}

export type PlayStepFiveScreenDispatchProps = {
    setChallengeCoins: (date: any) => void,
    clearChallengeData: () => void
}

export type PlayStepFiveScreenProps = PlayStepFiveScreenStateProps & PlayStepFiveScreenDispatchProps
