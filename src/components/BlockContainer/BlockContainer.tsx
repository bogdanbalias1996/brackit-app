import * as React from 'react'
import { View, Text } from 'react-native'
import { ButtonStyledProps } from './'
import styles from './BlockContainer.styles'

export const BlockContainer: React.SFC<ButtonStyledProps> = ({
  title,
  children
}): JSX.Element => {
  return (
    <View style={styles.container}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  )
}