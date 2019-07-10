export interface PlayStepThreeScreenStateProps {
    data: any
    challengePlaces: any
    favouritePlaces: any
}

export type PlayStepThreeScreenDispatchProps = {
    setChallengePlaces: (placeId: string) => void
    setFavouritePlace: (placeId: string) => void
}

export type PlayStepThreeScreenProps = PlayStepThreeScreenStateProps & PlayStepThreeScreenDispatchProps
