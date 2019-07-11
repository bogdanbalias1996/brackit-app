export interface CheckChallengeScreenStateProps {
    challengeName: string;
    challengeUsers: any;
    challengePlace: any;
    challengeDate: string;
    challengeCoins: string;
}

export type CheckChallengeScreenDispatchProps = {
    setChallengeCoins: (date: any) => void,
    clearChallengeData: () => void
}

export type CheckChallengeScreenProps = CheckChallengeScreenStateProps & CheckChallengeScreenDispatchProps
