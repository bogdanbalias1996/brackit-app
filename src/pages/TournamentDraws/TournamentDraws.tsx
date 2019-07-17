import * as React from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import Swiper from "react-native-swiper";

import { IGlobalState } from "../../coreTypes";
import { goBack } from "../../navigationService";
import {
  TournamentDrawsScreenProps,
  TournamentDrawsScreenDispatchProps
} from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { MatchItem } from "../../components/MatchItem/MatchItem";
import { Icon } from "../../components/Icon/Icon";
import styles from "./TournamentDraws.styles";

const drawData = [
  {
    round: "Round 1",
    date: "14 June, 2019",
    matches: [
      {
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
      },
      {
        id: "2",
        compatitors: [
          {
            players: [
              {
                name: "Magnus Kekhuis",
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
    ]
  },
  {
    round: "Round 2",
    date: "16 June, 2019",
    matches: [
      {
        id: "3",
        compatitors: [
          {
            players: [
              {
                name: "AAA Lamba",
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
      },
      {
        id: "4",
        compatitors: [
          {
            players: [
              {
                name: "Magnus Kekhuis",
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
      },
      {
        id: "5",
        compatitors: [
          {
            players: [
              {
                name: "Magnus Kekhuis",
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
      },
      {
        id: "6",
        compatitors: [
          {
            players: [
              {
                name: "Magnus Kekhuis",
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
    ]
  }
];

const Header = navigation => (
  <HeaderRounded
    getLeftComponent={() => {
      return (
        <TouchableOpacity style={styles.iconCancel} onPress={() => goBack()}>
          <Icon name="cancel" color="white" />
        </TouchableOpacity>
      );
    }}
    title={
      navigation.navigation.state.params &&
      navigation.navigation.state.params.title + " Draws".toUpperCase()
    }
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (
  dispatch
): TournamentDrawsScreenDispatchProps => ({});

export class Component extends React.PureComponent<TournamentDrawsScreenProps> {
  static navigationOptions = ({ navigation }) => ({
    header: () => <Header navigation={navigation} />
  });
  state = {
    activeIndex: 0,
    activeElement: drawData[0].matches
  };

  renderItem = ({ item }) => {
    return (
      <MatchItem
        compatitors={item.compatitors}
        style={{ marginVertical: 10 }}
      />
    );
  };

  setActiveElement = index => {
    this.setState({ activeElement: drawData[index].matches });
  };

  render() {
    const { activeIndex, activeElement } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {drawData.length ? (
          <View style={styles.wrapSlider}>
            <Swiper
              index={activeIndex}
              showsButtons={true}
              showsPagination={false}
              loop={false}
              scrollEventThrottle={0}
              onMomentumScrollEnd={(e, state, context) => {
                this.setActiveElement(state.index);
              }}
            >
              {drawData.map((item, i) => (
                <View key={i} style={styles.slide}>
                  <Text style={styles.text}>{item.round.toUpperCase()}</Text>
                  <Text style={styles.textDate}>{item.date}</Text>
                </View>
              ))}
            </Swiper>
          </View>
        ) : null}
        <FlatList
          data={activeElement}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          style={styles.matchsList}
        />
      </SafeAreaView>
    );
  }
}

export const TournamentDrawsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
