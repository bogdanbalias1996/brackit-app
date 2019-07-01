import { StyleProp, ViewStyle } from 'react-native'

export interface LinearGradientProps {
  colors?: string[]
  start?: [number, number]
  end?: [number, number]
  locations?: number[]
  style?: StyleProp<ViewStyle>
}
