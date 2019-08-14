import { NavigationScreenProp, NavigationScreenOptions } from 'react-navigation'
export interface CommentsScreenStateProps {
    navigation: NavigationScreenProp<any, any>
}

export type CommentsScreenDispatchProps = {}

export type CommentsScreenProps = CommentsScreenStateProps & CommentsScreenDispatchProps
