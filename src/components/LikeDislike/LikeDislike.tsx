import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { ButtonWithEmoji } from '../ButtonWithEmoji/ButtonWithEmoji'

export const LikeDislike = ({
  likeCount,
  dislikeCount,
  selected = '',
  style = {}
}) => {
  return (
    <View style={[styles.container, style]}>
      <ButtonWithEmoji emoji='+1' text={likeCount} selected={selected === 'like'}/>
      <ButtonWithEmoji emoji='-1' text={dislikeCount} selected={selected === 'dislike'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 32
  }
})
