import * as React from 'react'
import { connect } from 'react-redux'
import { IGlobalState } from '../../coreTypes'
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView, ScrollView } from 'react-navigation'
import { HeaderRounded } from '../../components/HeaderRounded/HeaderRounded'
import { colorBlueberry, colorDarkGrey, colorLightBlue } from '../../variables'
import ViewMoreText from 'react-native-view-more-text';
import { Icon } from '../../components/Icon/Icon'
import { Tabs, defaultTabsStyles } from '../../components/Tabs/Tabs'
import { PartyUpdates } from './PartyUpdates'
import { PoliticiansList } from '../Politicians/PoliticiansList'
import { LikeDislike } from '../../components/LikeDislike/LikeDislike'
import { getPoliticiansByParty } from './actions'
import { showPoliticianScreen } from '../Politicians/actions'
import { Politician } from '../Politicians'
import { Party } from '../Parties'
import {
  PartyScreenProps,
  PartyScreenStateProps,
  PartyScreenDispatchProps
} from './'
import get from 'lodash.get'
import { navigate } from '../../navigationService'

const ButtonToggle = ({ onPress, text, iconName }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnToggle}>
    <Text style={styles.btnToggleText}>{text}</Text>
    <Icon name={iconName} color={colorBlueberry} />
  </TouchableOpacity>
)

const mapStateToProps = (state: IGlobalState): PartyScreenStateProps => ({
  politicians: state.PartyState.politicians,
  party: state.PartyState.party
})

const mapDispatchToProps = (dispatch): PartyScreenDispatchProps => ({
  getPoliticiansByParty: (partyId: string) => dispatch(getPoliticiansByParty(partyId)),
  showPoliticianScreen: (politician: Politician) => dispatch(showPoliticianScreen(politician) as any)
})

export class Component extends React.PureComponent<PartyScreenProps> {
  static navigationOptions = {
    header: (props) => {
      const { name = '' } = get(props, 'scene.route.params', {}) as Party

      return <HeaderRounded {...props} title={name} />
    }
  }


  componentDidMount() {
    this.props.getPoliticiansByParty('1')
  }

  render() {
    const { party, politicians, showPoliticianScreen } = this.props
    const {
      logoUrl,
      name,
      link,
      leadership,
      ideology,
      political_position
    } = party

    const tabsConfig = [
      {
        title: 'Party Updates',
        component: () => <PartyUpdates />
      },
      {
        title: 'Politicians',
        component: () => (
          <PoliticiansList
            politicians={politicians}
            onItemPress={showPoliticianScreen}
          />
        )
      },
      {
        title: 'Issues',
        component: () => (<Text>Issues Component</Text>)
      }
    ]

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.info}>
            <Image style={styles.logo} source={{ uri: logoUrl }}></Image>
            <Text style={styles.partyName}>{name}</Text>

            <TouchableOpacity onPress={() => navigate({ routeName: 'WebView', params: { url: link, pageTitle: 'Party Web Page' } })}>
              <Text style={styles.title}>{link}</Text>
            </TouchableOpacity>

            <Text>
              <Text style={styles.title}>Leadership:  </Text>
              <Text style={styles.text}>{leadership}</Text>
            </Text>
            <Text>
              <Text style={styles.title}>Ideology:  </Text>
              <Text style={styles.text}>{ideology}</Text>
            </Text>
            <Text>
              <Text style={styles.title}>Political position:  </Text>
              <Text style={styles.text}>{political_position}</Text>
            </Text>

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

          <View style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Political Ideology</Text>
              <ViewMoreText
                numberOfLines={3}
                renderViewMore={(onPress) => <ButtonToggle onPress={onPress} iconName="down" text="Read More" />}
                renderViewLess={(onPress) => <ButtonToggle onPress={onPress} iconName="up" text="Read Less" />}
                textStyle={styles.cardText}
              >
                <Text>The Bloc Québécois (BQ) (French pronunciation: ​[blɔk kebekwa]) is a federal political party in Canada devoted to Quebec nationalism and the promotion of Quebec sovereignty.[5] </Text>
              </ViewMoreText>
            </View>

            <Tabs
              config={tabsConfig}
              stylesItem={defaultTabsStyles.roundedTabs}
              stylesTabsContainer={{
                backgroundColor: 'transparent',
                marginBottom: 16
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export const PartyScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLightBlue
  },
  content: {
    marginLeft: 8,
    marginRight: 8
  },
  info: {
    padding: 24,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  card: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: colorBlueberry,
    borderWidth: 1,
    marginBottom: 14
  },
  partyName: {
    fontFamily: 'poppins-semi-bold',
    fontSize: 20,
    color: colorDarkGrey
  },
  title: {
    color: colorBlueberry,
    fontSize: 12,
    fontFamily: 'poppins-semi-bold',
    marginRight: 10,
    lineHeight: 18
  },
  text: {},
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
  },
  btnToggle: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnToggleText: {
    fontFamily: 'poppins-semi-bold',
    color: colorBlueberry
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'poppins-semi-bold',
    color: colorDarkGrey
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'poppins-medium',
    color: colorDarkGrey
  }
})
