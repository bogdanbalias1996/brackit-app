import * as React from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput
} from "react-native";
import { LinearGradient } from "expo";

import { TournamentItem } from "./TournamentItem";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";
import { Icon } from "../../components/Icon/Icon";
import { PlaySearchScreenProps } from ".";
import { IGlobalState } from "../../coreTypes";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import styles from "./PlaySearch.styles";
import {
  colorLightGreyBlue,
  colorBlueStart,
  colorBlueEnd
} from "../../variables";
import { navigate } from "../../navigationService";

const dataBuddies = [
  {
    id: "1",
    name: "Huo Shu",
    rate: 500,
    avatar: require("../../../assets/avatar.png")
  },
  {
    id: "2",
    name: "Andriano Chelentano",
    rate: 500,
    avatar: require("../../../assets/avatar.png")
  },
  {
    id: "3",
    name: "Billy Bob",
    rate: 500,
    avatar: require("../../../assets/avatar.png")
  }
];
const dataTournament = [
  {
    id: "1",
    statusTournament: "super 1000",
    avaliableEntries: 100,
    entries: 95,
    title: "Who can beat me in ping pong?",
    subTitle: "single elimination",
    date: "12 June, 6:00 pm",
    location: "Sun sea Resort Outer ring road, Bellandur, 560103",
    prize: "12 000",
    singleEntryFee: "50",
    doubleEntryFee: "70",
    events: [
      {
        id: "1",
        value: "U10",
        entries: [
          {
            id: "01",
            name: "Anton Brownstein",
            avatar: require("../../../assets/avatar.png"),
            rating: 1500,
            info: "Level Up Sports "
          },
          {
            id: "02",
            name: "Anton Brownstein1",
            avatar: require("../../../assets/avatar.png"),
            rating: 500,
            info: "Level Up Sports "
          }
        ],
        finalMatch: {
          id: "1",
          compatitors: [
            {
              players: [
                {
                  name: "Fua Lamba",
                  avatar: require("../../../assets/avatar.png")
                },
                {
                  name: "Fua Lamba1",
                  avatar: require("../../../assets/avatar.png")
                }
              ],
              rating: 1200,
              scores: ["10", "15", "5"],
              isWinner: true
            },
            {
              players: [
                {
                  name: "Fua Lamba1",
                  avatar: require("../../../assets/avatar.png")
                },
                {
                  name: "Fua Lamba2",
                  avatar: require("../../../assets/avatar.png")
                }
              ],
              rating: 1000,
              scores: ["8", "10", "10"],
              isWinner: false
            }
          ]
        }
      },
      {
        id: "2",
        value: "U15"
      },
      {
        id: "3",
        value: "WD2",
        double: true
      }
    ]
  },
  {
    id: "2",
    statusTournament: "super 100",
    avaliableEntries: 100,
    entries: 95,
    title: "Who can beat me in badminton?",
    subTitle: "single elimination",
    date: "12 June, 6:00 pm",
    location: "Sun sea Resort Outer ring road, Bellandur, 560103",
    prize: "12 000",
    singleEntryFee: "100",
    doubleEntryFee: "70",
    events: [
      {
        id: "1",
        value: "U10"
      },
      {
        id: "2",
        value: "U15"
      },
      {
        id: "3",
        value: "U17"
      },
      {
        id: "4",
        value: "CD1"
      },
      {
        id: "5",
        value: "BS1"
      },
      {
        id: "6",
        value: "WD2",
        double: true
      },
      {
        id: "7",
        value: "XD8",
        double: true
      }
    ]
  }
];

const Header = props => (
  <HeaderRounded
    {...props}
    showCustomComponent={true}
    customComponent={() => {
      return (
        <View style={styles.wrapCustomHeader}>
          <View style={styles.wrapSearch}>
            <Icon
              name="search"
              color={colorLightGreyBlue}
              style={styles.icon}
              size={30}
            />
            <TextInput
              style={styles.input}
              placeholder="Search BrackIt"
              autoCorrect={false}
              numberOfLines={1}
              value={
                props.navigation.state.params &&
                props.navigation.state.params.searchText
              }
              placeholderTextColor={colorLightGreyBlue}
              onChangeText={val =>
                props.navigation.setParams({ searchText: val })
              }
            />
            {props.navigation.state.params &&
            props.navigation.state.params.searchText.length ? (
              <TouchableOpacity
                style={styles.clearBtn}
                onPress={() => props.navigation.setParams({ searchText: "" })}
              >
                <Icon name="cancel" color={colorLightGreyBlue} size={18} />
              </TouchableOpacity>
            ) : null}
          </View>
          <TouchableOpacity
            style={styles.wrapBtnCancel}
            onPress={() => props.navigation.goBack()}
          >
            <Text style={styles.btnCancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    }}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<PlaySearchScreenProps> {
  static navigationOptions = ({ navigation }) => ({
    header: props => <Header {...props} navigation={navigation} />
  });

  state = {
    activeFirstTab: true
  };

  renderBuddy = ({ item }) => {
    return (
      <View style={styles.itemWrap}>
        <View style={styles.itemLeft}>
          <AvatarStatus avatar={item.avatar} avatarRate={item.rate} size={36} />
          <View style={styles.wrapItemName}>
            <TouchableOpacity
              onPress={() => navigate({ routeName: "ProfileFriend" })}
            >
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itemRight}>
          <ButtonStyled
            onPress={() => alert("ok")}
            text={"+ Buddy".toUpperCase()}
          />
        </View>
      </View>
    );
  };

  findBuddies = () => {
    const { navigation } = this.props;
    if (navigation.state.params.searchText === "") {
      return [];
    }

    return dataBuddies.filter(
      item =>
        item.name
          .toLowerCase()
          .indexOf(navigation.state.params.searchText.toLowerCase().trim()) > -1
    );
  };

  findTournaments = () => {
    const { navigation } = this.props;
    if (navigation.state.params.searchText === "") {
      return [];
    }

    return dataTournament.filter(
      item =>
        item.title
          .toLowerCase()
          .indexOf(navigation.state.params.searchText.toLowerCase().trim()) > -1
    );
  };

  renderTournament = ({ item }) => {
    return <TournamentItem data={item} />;
  };

  render() {
    const { activeFirstTab } = this.state;
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        {navigation.state.params &&
        navigation.state.params.searchText.length ? (
          <View style={{ flex: 1 }}>
            <View style={styles.wrapTabs}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ activeFirstTab: !activeFirstTab })
                }
              >
                <LinearGradient
                  start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={
                    activeFirstTab
                      ? [colorBlueStart, colorBlueEnd]
                      : ["white", "white"]
                  }
                  style={
                    activeFirstTab ? styles.activeTab : styles.disActiveTab
                  }
                >
                  <Text
                    style={
                      activeFirstTab
                        ? styles.activeTabText
                        : styles.disActiveTabText
                    }
                  >
                    Athletes
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ activeFirstTab: !activeFirstTab })
                }
              >
                <LinearGradient
                  start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={
                    activeFirstTab
                      ? ["white", "white"]
                      : [colorBlueStart, colorBlueEnd]
                  }
                  style={
                    activeFirstTab ? styles.disActiveTab : styles.activeTab
                  }
                >
                  <Text
                    style={
                      activeFirstTab
                        ? styles.disActiveTabText
                        : styles.activeTabText
                    }
                  >
                    Tournaments
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              {activeFirstTab ? (
                <FlatList
                  data={this.findBuddies()}
                  renderItem={this.renderBuddy}
                  keyExtractor={item => item.id}
                  style={{ flex: 1 }}
                />
              ) : (
                <FlatList
                  data={this.findTournaments()}
                  renderItem={this.renderTournament}
                  keyExtractor={item => item.id}
                  style={{ flex: 1 }}
                />
              )}
            </View>
          </View>
        ) : (
          <Text style={styles.noDataText}>
            Search for athletes, and tournaments
          </Text>
        )}
      </SafeAreaView>
    );
  }
}

export const PlaySearchScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
