import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import {
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

import { IGlobalState } from '../../coreTypes'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { HeaderRounded } from '../../components/HeaderRounded/HeaderRounded'
import { colorLightBlue, colorBlueberry, colorDarkGrey } from '../../variables'
import { navigate } from '../../navigationService'
import Flag from 'react-native-flags'
import { Country, CountrySelectionProps, CountrySelectionStateProps } from './'
import { selectCountry } from './actions'

const mapStateToProps = (state: IGlobalState) => ({
  countries: state.LoginState.countries,
  selectedCountryCode: state.LoginState.selectedCountryCode
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectCountry: (code: string) => dispatch(selectCountry(code))
})

export class Component extends React.PureComponent<CountrySelectionProps> {
  static navigationOptions = {
    header: (props) => (
      <HeaderRounded
        {...props}
        title='Country Selection'
        style={{ backgroundColor: colorLightBlue }}
      />
    )
  }

  state = {
    searchText: ''
  }

  componentDidMount() {
    // this.props.getParties()
  }

  onSearch = (searchText: string) => {
    this.setState({ searchText })
  }

  render() {
    const {
      selectedCountryCode,
      countries,
      selectCountry
    } = this.props
    const { searchText } = this.state
    const filteredCountries = countries.filter((country) => country.name.indexOf(searchText) > -1)

    // if (isDataLoading) {
    //   return (
    //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //       <ActivityIndicator size="large" color={'#58377B'} />
    //     </View>
    //   )
    // }

    return (
      <View style={styles.container}>
        <SearchBar onChangeText={this.onSearch} />
        <View style={styles.listContainer}>
          <FlatList
            data={filteredCountries}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.listItem, item.code === selectedCountryCode ? styles.listItemSelected : {}]}
                onPress={() => { selectCountry(item.code) }}
              >
                <Flag
                  code={item.code}
                  size={24}
                  type="flat"
                />
                <Text style={styles.listItemText}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => String(item.code)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: colorLightBlue,
  },
  listContainer: {
    flex: 1,
    marginRight: -8,
    marginLeft: -8,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 2,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  listItemSelected: {
    borderColor: colorBlueberry
  },
  listItemText: {
    fontFamily: 'poppins-medium',
    fontSize: 12,
    color: colorDarkGrey,
    marginLeft: 16
  }
})

export const CountrySelectionScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)