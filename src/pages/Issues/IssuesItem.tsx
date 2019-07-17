import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Issue } from './'
import { colorCoolGrey, colorDarkGrey } from '../../variables'
import { CardWithActions } from '../../components/CardWithActions/CardWithActions'
import { ActionItem } from '../../components/CardWithActions/'
import { ReactionViewer } from '../../components/ReactionViewer/ReactionViewer'
import { ReactionAdd } from '../../components/ReactionAdd/ReactionAdd'
import { Tags } from '../../components/Tags/Tags'

const actionsConfig: Array<ActionItem> = [
  {
    label: 'Unfollow party',
    action: () => console.log('Unfollow party')
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

export const IssuesItem = ({ issue, onPress }) => {
  const {
    author,
    ref,
    title,
    text,
    tags
  } = issue as Issue

  return (
    <CardWithActions actionsConfig={actionsConfig}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.info}>
          <Text style={styles.grayedText}>{author}</Text>
          <Text style={styles.grayedText}>Bill {ref}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>

        <View style={styles.tagContainer}>
          <Tags tags={tags} />
        </View>

        <View style={styles.reactionContainer}>
          <ReactionViewer />
          <ReactionAdd />
        </View>
      </TouchableOpacity>
    </CardWithActions>
  )
}

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop: 3
  },
  grayedText: {
    fontSize: 12,
    color: colorCoolGrey,
    fontFamily: 'poppins-medium'
  },
  title: {
    fontSize: 16,
    color: colorDarkGrey,
    fontFamily: 'poppins-semi-bold'
  },
  text: {
    fontSize: 14,
    color: colorDarkGrey,
    fontFamily: 'poppins'
  },
  reactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginRight: -16
  },
  tagContainer: {
    marginTop: 16,
    marginBottom: 15
  }
})
