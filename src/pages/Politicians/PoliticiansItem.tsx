import * as React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { colorDarkGrey, colorCoolGrey } from '../../variables'
import { CardWithActions } from '../../components/CardWithActions/CardWithActions'
import { ActionItem } from '../../components/CardWithActions/'
import { LikeDislike } from '../../components/LikeDislike/LikeDislike'

const actionsConfig: Array<ActionItem> = [
  {
    label: 'Unfollow politician',
    action: () => console.log('Unfollow politician')
  },
  {
    label: 'Remove from the feed',
    action: () => console.log('Remove from the feed')
  },
  {
    label: 'Block',
    action: () => console.log('Block')
  }
]

export const PoliticiansItem = (props) => {
  const { politician, onPress } = props
  const {
    avatarUrl,
    name,
    description,
    text,
    likes,
    dislikes
  } = politician

  return (
    <CardWithActions actionsConfig={actionsConfig}>

      <TouchableOpacity onPress={onPress}>
        <View style={styles.header}>
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
          <View>
            <Text style={styles.textTitle}>{name}</Text>
            <Text style={styles.textDescription}>{description}</Text>
          </View>
        </View>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>

      <LikeDislike likeCount={likes} dislikeCount={dislikes} selected="like" />

    </CardWithActions>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: 20
  },
  textTitle: {
    fontSize: 16,
    color: colorDarkGrey,
    fontFamily: 'poppins-semi-bold'
  },
  textDescription: {
    fontSize: 12,
    color: colorCoolGrey,
    fontFamily: 'poppins-medium'
  },
  text: {
    fontSize: 14,
    color: colorDarkGrey,
    fontFamily: 'poppins-medium',
    marginTop: 8,
    marginBottom: 8
  }
})
