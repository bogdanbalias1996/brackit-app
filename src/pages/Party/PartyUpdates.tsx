import * as React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { CardWithActions } from '../../components/CardWithActions/CardWithActions'
import { colorDarkGrey, colorCoolGrey } from '../../variables'
import { ReactionViewer } from '../../components/ReactionViewer/ReactionViewer'
import { ReactionAdd } from '../../components/ReactionAdd/ReactionAdd'
import { wrapBoldText } from '../../common/utils/helpers'

const actionsConfig = [
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
  },
]

const renderItem = ({ item }) => {
  return (
    <CardWithActions actionsConfig={actionsConfig}>
      <Text>{wrapBoldText('<b>Bloc Québécois</b> added new politician <b>Blaine Calkins</b>')}</Text>
      <Text style={styles.date}>2 weeks ago</Text>
      <View style={styles.reactionContainer}>
        <ReactionViewer />
        <ReactionAdd />
      </View>
    </CardWithActions>
  )
}

export const PartyUpdates = () => {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
        keyExtractor={(item) => String(item)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textBold: {
    color: colorDarkGrey,
    fontFamily: 'poppins-semi-bold',
    fontSize: 14
  },
  date: {
    fontSize: 12,
    marginTop: 6,
    color: colorCoolGrey,
    fontFamily: 'poppins-medium'
  },
  reactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginRight: -16
  }
})