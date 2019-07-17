import * as React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Icon } from '../../components/Icon/Icon'
import { colorLightGreyBlue } from '../../variables'

type SearchBarProps = {
  onChangeText: (searchText) => void
}

export const SearchBar = (props: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Icon name="search" color={colorLightGreyBlue} style={styles.icon} />
      <TextInput style={styles.input}
        placeholder={'Search'}
        autoCorrect={false}
        placeholderTextColor={colorLightGreyBlue}
        onChangeText={props.onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(174,182,209, 0.13)',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    height: 28,
    marginBottom: 8,
    marginTop: 12
  },
  icon: {
    marginLeft: 8
  },
  input: {
    fontSize: 12,
    lineHeight: 18,
    padding: 5,
    paddingLeft: 0,
    fontFamily: 'poppins-medium'
  }
})

