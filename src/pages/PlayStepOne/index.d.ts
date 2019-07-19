export interface PlayStepOneScreenStateProps {
    challengeName: string
}

export type PlayStepOneScreenDispatchProps = {
    setChallengeName: (name: string) => void,
    clearChallengeData: () => void
}

export type PlayStepOneScreenProps = PlayStepOneScreenStateProps & PlayStepOneScreenDispatchProps
