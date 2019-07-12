export interface CreateTournamentScreenStateProps {
    challengeName: string
}

export type CreateTournamentScreenDispatchProps = {
    setChallengeName: (name: string) => void,
}

export type CreateTournamentScreenProps = CreateTournamentScreenStateProps & CreateTournamentScreenDispatchProps
