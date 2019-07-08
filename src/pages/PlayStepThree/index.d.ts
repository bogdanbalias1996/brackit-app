export interface PlayStepThreeScreenStateProps {
    data: any
    challengePlaces: any
}

export type PlayStepThreeScreenDispatchProps = {
    setChallengePlaces: (placeId: string) => void
}

export type PlayStepThreeScreenProps = PlayStepThreeScreenStateProps & PlayStepThreeScreenDispatchProps
