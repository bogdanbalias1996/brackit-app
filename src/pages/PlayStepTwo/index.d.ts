
export type ListItem = {
    id: string,
    name: string,
    avatar: number,
    address: string
}
export interface PlayStepTwoScreenStateProps {
    ListItems: Array<ListItem>
    title: string
}

export type PlayStepTwoScreenDispatchProps = {}

export type PlayStepTwoScreenProps = PlayStepTwoScreenStateProps & PlayStepTwoScreenDispatchProps
