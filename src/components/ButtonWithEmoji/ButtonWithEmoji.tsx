import * as React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
import { colorCoolGrey, colorBlueberry } from '../../variables'

export const ButtonWithEmoji = ({
  emoji,
  text,
  selected = false,
  onPress = () => { },
  style = {},
  hideText = false
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style, selected ? styles.btnSelected : {}]}>
      <Emoji name={emoji} style={styles.emoji} />
      {!hideText && <Text style={[styles.btnText, selected ? styles.btnSelectedText : {}]}>{text}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    paddingRight: 9,
    paddingLeft: 9,
    minHeight: 32,
    minWidth: 59
  },
  btnSelected: {
    borderWidth: 1,
    borderColor: colorBlueberry
  },
  btnText: {
    color: colorCoolGrey,
    marginLeft: 8,
    fontFamily: 'poppins-semi-bold',
    fontSize: 12
  },
  btnSelectedText: {
    color: colorBlueberry
  },
  emoji: {
    fontSize: 18
  }
})
