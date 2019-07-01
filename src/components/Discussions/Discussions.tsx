import * as React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Tags } from '../../components/Tags/Tags'
import {
  colorDarkGrey,
  colorCoral,
  colorFreshGreen,
  colorCoolGrey,
  colorBlueberry
} from '../../variables'
import { Tabs, defaultTabsStyles } from '../../components/Tabs/Tabs'
import { navigate } from '../../navigationService'
import { DiscussionsProps } from './'


const renderItem = ({ item }) => (
  <View style={styles.item}>
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Tags
          tags={[{ text: item.type, type: item.type === 'pros' ? 'type1' : 'type2' }]}
          tagStyle={{ marginBottom: 0 }}
        />
        <Text>@{item.author}</Text>
      </View>
      <Text>2 weeks ago</Text>
    </View>
    <Text style={styles.itemText}>{item.text}</Text>
  </View>
)

export class Discussions extends React.PureComponent<DiscussionsProps> {
  render() {
    const { data } = this.props
    const prosOpinions = data.filter(item => item.type === 'pros')
    const consOpinions = data.filter(item => item.type === 'cons')
    const uniqPeopleCount = new Set(data.map(item => item.author)).size
    const renderList = (data) => (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    )
    const tabsConfig = [
      {
        title: 'All',
        component: () => renderList(data)
      },
      {
        // title: `Pros (${prosOpinions.length})`,
        component: () => renderList(prosOpinions),
        // tabTitleStyles: {
        //   color: colorFreshGreen
        // },
        titleComponent: (isActive) => <Text style={{ color: isActive ? 'white' : colorFreshGreen }}>{`Pros (${prosOpinions.length})`}</Text>,
      },
      {
        component: () => renderList(consOpinions),
        titleComponent: (isActive) => <Text style={{ color: isActive ? 'white' : colorCoral }}>{`Cons (${consOpinions.length})`}</Text>,
      }
    ]

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Discussions</Text>
            <Text style={styles.peopleCounterTitle}>{uniqPeopleCount} people discussing</Text>
          </View>
          <Tabs
            config={tabsConfig}
            stylesTabsContainer={{
              marginTop: 16,
              marginBottom: 16
            }}
            stylesItem={defaultTabsStyles.roundedTabs}
          />
        </View>

        <TouchableOpacity style={styles.btnLeaveAnOpinion} onPress={() => {
          navigate({ routeName: 'LeaveAnOpinion' })
        }}>
          <Text style={styles.btnLeaveAnOpinionText}>Leave an Opinion</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: colorDarkGrey,
    fontFamily: 'poppins-semi-bold'
  },
  peopleCounterTitle: {
    fontSize: 12,
    color: colorCoolGrey,
    fontFamily: 'poppins-medium'
  },
  itemText: {
    fontSize: 14,
    color: colorDarkGrey,
    fontFamily: 'poppins',
    marginTop: 8
  },
  item: {
    marginBottom: 24
  },
  btnLeaveAnOpinion: {
    backgroundColor: colorBlueberry,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -8,
    marginRight: -8
  },
  btnLeaveAnOpinionText: {
    fontSize: 16,
    fontFamily: 'poppins-semi-bold',
    color: 'white',
    padding: 13
  }
})