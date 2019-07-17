import { ImageSourcePropType, GestureResponderEvent } from 'react-native'

export type SelectOption = {
  label: string
  value: string
  preview?: ImageSourcePropType
}

export type SelectOptionProps = {
  onPress?: (event: GestureResponderEvent) => void
  icon?: string
  style?: any
  isLast: boolean
}

export type SelectProps = {
  options: SelectOption[]
  value: string
  style?: any
  styleSelectedOption?: any
  styleOption?: any
  styleOptionsContainer?: any
  renderSelectedOption?: Function
  renderOption?: Function
}