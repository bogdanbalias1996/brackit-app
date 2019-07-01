import * as React from 'react'
import { View } from 'react-native'
import { IGlobalState } from '../../coreTypes'
import { connect } from 'react-redux'
import { filterIssues } from './actions'
import { IssueTypes } from './'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { colorPinkyPurple } from '../../variables'

const mapStateToProps = (state: IGlobalState) => ({
  filteredBy: state.IssuesState.filteredBy
})

const mapDispatchToProps = (dispatch) => ({
  filterIssues: (filterBy: IssueTypes) => dispatch(filterIssues(filterBy))
})

const Component = ({ filterIssues, filteredBy }) => {
  return (
    <ButtonGroup
      style={{
        backgroundColor: 'transparent',
        marginTop: 0
      }}
      stylesItem={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        height: 19
      }}
      stylesItemText={{
        color: '#ffffff60',
        fontSize: 12,
        fontFamily: 'poppins'
      }}
      stylesSelectedItem={{ backgroundColor: 'transparent' }}
      stylesSelectedItemText={{ color: 'white' }}
      getActiveIndicator={() => (
        <View style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: colorPinkyPurple,
          marginTop: -16,
          marginLeft: 4
        }} />
      )}

      value={filteredBy}
      items={[
        { title: 'Popular', value: 'popular', onPress: () => filterIssues('popular') },
        { title: 'New Issues', value: 'new', onPress: () => filterIssues('new') },
        { title: 'New legislation', value: 'new_legislation', onPress: () => filterIssues('new_legislation') }
      ]}
    />
  )
}

export const HeaderTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)