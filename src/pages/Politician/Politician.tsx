import * as React from 'react'
import { connect } from 'react-redux'
import { IGlobalState } from '../../coreTypes'
import { Text, Image, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SafeAreaView, ScrollView } from 'react-navigation'
import { HeaderRounded } from '../../components/HeaderRounded/HeaderRounded'
import { colorBlueberry, colorDarkGrey, colorLightBlue, colorCoolGrey } from '../../variables'
import { Tabs, defaultTabsStyles } from '../../components/Tabs/Tabs'
import { LikeDislike } from '../../components/LikeDislike/LikeDislike'
import {
  PoliticianStateProps,
  PoliticianDispatchProps,
  PoliticianProps
} from './'
import { Politician } from '../Politicians/'
import { PoliticianUpdates } from './PoliticianUpdates'
import { getPoliticianUpdates } from './actions'
import get from 'lodash.get'
import { Loader } from '../../components/Loader/Loader'

const mapStateToProps = (state: IGlobalState): PoliticianStateProps => ({
  politicianUpdates: state.PoliticiansState.politicianUpdates,
  isPoliticianUpdatesLoading: state.PoliticiansState.isPoliticianUpdatesLoading
})

const mapDispatchToProps = (dispatch): PoliticianDispatchProps => ({
  getPoliticianUpdates: (politicianId) => dispatch(getPoliticianUpdates(politicianId))
})

export class Component extends React.PureComponent<PoliticianProps> {
  static navigationOptions = {
    header: (props) => {
      const { name = '' } = get(props, 'scene.route.params', {}) as Politician

      return <HeaderRounded {...props} title={name} />
    }
  }

  componentDidMount() {
    const politician = get(this.props, 'navigation.state.params', {}) as Politician

    this.props.getPoliticianUpdates('1')
  }

  render() {
    const politician = get(this.props, 'navigation.state.params', {}) as Politician

    const {
      politicianUpdates,
      isPoliticianUpdatesLoading
    } = this.props

    const {
      avatarUrl,
      name,
      description,
      text,
      likes,
      dislikes,
      partyLogoUrl,
      partyName
    } = politician

    const tabsConfig = [
      {
        title: 'Politician Updates',
        component: () => (
          <Loader isDataLoaded={!isPoliticianUpdatesLoading}>
            <PoliticianUpdates data={politicianUpdates} />
          </Loader>
        )
      },
      {
        title: 'Achievements',
        component: () => <Text>Achievements</Text>
      },
      {
        title: 'СV',
        component: () => (<Text>CV Component</Text>)
      }
    ]

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.info}>

            <View style={styles.headingContainer}>
              <Image style={styles.avatar} source={{ uri: avatarUrl }}></Image>
              <View>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.partyInfo}>
                  <Image style={styles.partyLogo} source={{ uri: partyLogoUrl }}></Image>
                  <Text style={styles.text}>{partyName}</Text>
                </View>
              </View>
            </View>

            <Text style={styles.text}>{description}</Text>

            <View style={[styles.flexDirectionRow, styles.actionButtonsContainer]}>
              <LikeDislike
                likeCount={7}
                dislikeCount={13}
                selected={'dislike'}
              />
              <TouchableOpacity style={styles.btnFollow}>
                <Text style={styles.btnFollowText}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Tabs
            style={styles.content}
            config={tabsConfig}
            stylesItem={defaultTabsStyles.roundedTabs}
            stylesTabsContainer={{
              backgroundColor: 'transparent',
              marginBottom: 16
            }}
          />

        </ScrollView>
      </SafeAreaView>
    )
  }
}

export const PoliticianScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLightBlue
  },
  info: {
    padding: 24,
    marginBottom: 8,
    backgroundColor: 'white'
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  partyInfo: {
    flexDirection: 'row'
  },
  partyLogo: {
    height: 16,
    width: 16,
    borderColor: colorBlueberry,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 7
  },
  content: {
    marginLeft: 8,
    marginRight: 8
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: colorBlueberry,
    borderWidth: 1,
    marginRight: 16,
  },
  title: {
    color: colorDarkGrey,
    fontSize: 20,
    fontFamily: 'poppins-semi-bold',
    marginBottom: 5
  },
  text: {
    fontSize: 12,
    fontFamily: 'poppins-medium',
    color: colorCoolGrey
  },
  btnFollow: {
    backgroundColor: colorBlueberry,
    borderRadius: 4,
    flex: 1
  },
  btnFollowText: {
    color: 'white',
    fontFamily: 'poppins-semi-bold',
    fontSize: 12,
    padding: 7,
    textAlign: 'center'
  },
  actionButtonsContainer: {
    marginTop: 16
  },
  flexDirectionRow: {
    flexDirection: 'row'
  }
})
