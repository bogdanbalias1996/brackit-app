export interface PlayStepFourScreenStateProps { }

export type PlayStepFourScreenDispatchProps = {
    setChallengeName: (name: string) => void
}

export type PlayStepFourScreenProps = PlayStepFourScreenStateProps & PlayStepFourScreenDispatchProps
