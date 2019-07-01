import * as React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Party } from './'
import { colorBlueberry, colorBlueyGrey } from '../../variables'
import { CardWithActions } from '../../components/CardWithActions/CardWithActions'
import { ActionItem } from '../../components/CardWithActions/'
import { navigate } from '../../navigationService'

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

export const PartiesItem = (props) => {
  const {
    party,
    onPress
  } = props

  return (
    <CardWithActions actionsConfig={actionsConfig}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={onPress}>
          <Image source={{ uri: party.logoUrl }} style={styles.logo} />
        </TouchableOpacity>

        <View style={styles.content}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.heading}>{party.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate({ routeName: 'WebView', params: { url: party.link, pageTitle: 'Party Web Page' } })}>
            <Text style={[styles.title, styles.link]}>{party.link}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPress}>
            <Text>
              <Text style={styles.title}>Leadership:  </Text>
              <Text style={styles.text}>{party.leadership}</Text>
            </Text>
            <Text>
              <Text style={styles.title}>Ideology:  </Text>
              <Text style={styles.text}>{party.ideology}</Text>
            </Text>
            <Text>
              <Text style={styles.title}>Political position:  </Text>
              <Text style={styles.text}>{party.political_position}</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </CardWithActions>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 16,
    marginBottom: 8
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8
  },
  content: {
    flex: 1
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  textWithTitle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  title: {
    color: colorBlueberry,
    fontSize: 12,
    fontFamily: 'poppins-semi-bold',
    marginRight: 10,
    lineHeight: 18
  },
  link: {
    marginTop: 8,
    marginBottom: 8
  },
  text: {
    color: colorBlueyGrey,
    lineHeight: 18
  }
})
