import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { HeaderRounded } from '../../components/HeaderRounded/HeaderRounded'
import { colorLightBlue, colorDarkGrey, colorCoolGrey, colorBlueberry } from '../../variables'
import { Icon } from '../../components/Icon/Icon'

const ListItem = ({
  title,
  onPress,
  withIcon = false,
  style = {},
  styleText = {}
}) => {
  return (
    <TouchableOpacity style={[styles.listItem, style]} onPress={() => !!onPress && onPress()}>
      <Text style={[styles.listItemText, styleText]}>{title}</Text>
      {!!withIcon && <Icon name="next" color={colorCoolGrey} size={13} />}
    </TouchableOpacity>
  )
}

export class SettingsScreen extends React.PureComponent<{}>{
  static navigationOptions = {
    header: (props) => (
      <HeaderRounded
        {...props}
        style={{ backgroundColor: colorLightBlue }}
        title="Settings"
      />
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.listItemGroup}>
          <ListItem title="Settings page" onPress={() => { }} withIcon={true} />
          <ListItem title="Email notifications" onPress={() => { }} withIcon={true} />
          <ListItem title="Account" onPress={() => { }} withIcon={true} />
        </View>
        <View style={styles.listItemGroup}>
          <ListItem title="Clear image cache" onPress={() => { }} />
          <ListItem title="Clear all caches" onPress={() => { }} />
        </View>
        <View style={styles.listItemGroup}>
          <ListItem title="Sign Out" onPress={() => { }} styleText={styles.signOutText} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLightBlue,
    padding: 8,
    paddingTop: 12
  },
  listItemGroup: {
    marginBottom: 32
  },
  listItem: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: 'white',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  listItemText: {
    color: colorDarkGrey,
    fontSize: 14,
    fontFamily: 'poppins'
  },
  signOutText: {
    fontSize: 12,
    color: colorBlueberry,
    fontFamily: 'poppins-semi-bold'
  }
})