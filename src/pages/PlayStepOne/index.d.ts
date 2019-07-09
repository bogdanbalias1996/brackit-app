export interface PlayStepOneScreenStateProps { }

export type PlayStepOneScreenDispatchProps = {
    setChallengeName: (name: string) => void
}

export type PlayStepOneScreenProps = PlayStepOneScreenStateProps & PlayStepOneScreenDispatchProps
