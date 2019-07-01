import * as React from 'react'
import { LinearGradientComponent } from '../LinearGradient/LinearGradient'

export const CitiznBackground = (props): JSX.Element => {
  const { children = null } = props

  return (
    <LinearGradientComponent>
      {children}
    </LinearGradientComponent>
  )
}