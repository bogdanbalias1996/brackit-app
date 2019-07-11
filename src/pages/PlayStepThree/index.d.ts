export interface PlayStepThreeScreenStateProps {
    data: any
    challengePlace: any
    favouritePlaces: any
}

export type PlayStepThreeScreenDispatchProps = {
    setChallengePlace: (place: any) => void
    setFavouritePlaces: (place: any) => void
    clearChallengeData: () => void
}

export type PlayStepThreeScreenProps = PlayStepThreeScreenStateProps & PlayStepThreeScreenDispatchProps
