export interface PlayStepFourScreenStateProps {
    challengeDate: any
}

export type PlayStepFourScreenDispatchProps = {
    setChallengeDate: (date: any) => void,
    clearChallengeData: () => void
}

export type PlayStepFourScreenProps = PlayStepFourScreenStateProps & PlayStepFourScreenDispatchProps
