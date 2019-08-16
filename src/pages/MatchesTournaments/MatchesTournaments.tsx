import * as React from "react";
import { Text, TouchableOpacity, ScrollView, View, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import { connect } from "react-redux";

import { IGlobalState } from "../../coreTypes";
import { goBack } from "../../navigationService";
import {
  MatchesTournamentsScreenProps,
  MatchesTournamentsScreenDispatchProps
} from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { MatchItem } from "../../components/MatchItem/MatchItem";
import { Icon } from "../../components/Icon/Icon";
import styles from "./MatchesTournaments.styles";

const dataTournament = [
  {
    date: "2019-08-17",
    data: [
      {
        id: "1",
        status: "Status 1000",
        title: "Badminton tournament",
        date: "14 June, 2019",
        category: "MD",
        round: "Round 1",
        coins: 400,
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
        ],
        comments: [
          {
            id: "1",
            name: "Katayama Fumiki",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 1500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          },
          {
            id: "2",
            name: "Katayama Fumiki1",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          },
          {
            id: "3",
            name: "Katayama Fumiki2",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 1500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          }
        ]
      },
      {
        id: "2",
        status: "Status 1000",
        title: "Badminton tournament",
        date: "14 June, 2019",
        category: "MD",
        round: "Round 1",
        coins: 400,
        compatitors: [
          {
            players: [
              {
                name: "AAA Lamba",
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
              }
            ],
            rating: 1000,
            scores: ["8", "10", "10"],
            isWinner: false
          }
        ],
        comments: [
          {
            id: "1",
            name: "Katayama Fumiki",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 1500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          },
          {
            id: "2",
            name: "Katayama Fumiki1",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          },
          {
            id: "3",
            name: "Katayama Fumiki2",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 1500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          }
        ]
      },
      {
        id: "3",
        status: "Status 1000",
        title: "Badminton tournament",
        date: "14 June, 2019",
        category: "MD",
        round: "Round 1",
        coins: 400,
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
            scores: null
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
            scores: null
          }
        ],
        comments: [
          {
            id: "1",
            name: "Katayama Fumiki",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 1500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          },
          {
            id: "2",
            name: "Katayama Fumiki1",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          },
          {
            id: "3",
            name: "Katayama Fumiki2",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 1500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          }
        ]
      }
    ]
  },
  {
    date: "2019-08-18",
    data: [
      {
        id: "3",
        status: "Status 1000",
        title: "Badminton tournament",
        date: "14 June, 2019",
        category: "MD",
        round: "Round 1",
        coins: 400,
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
            scores: null
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
            scores: null
          }
        ],
        comments: [
          {
            id: "1",
            name: "Katayama Fumiki",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 1500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          },
          {
            id: "2",
            name: "Katayama Fumiki1",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          },
          {
            id: "3",
            name: "Katayama Fumiki2",
            avatar: require("../../../assets/avatar.png"),
            avatarRate: 1500,
            comment:
              "Globally evolve vertical users with interdependent growth.",
            date: "3wk"
          }
        ]
      }
    ]
  }
];

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity style={styles.iconCancel} onPress={() => goBack()}>
          <Icon name="left" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Matches - Tournaments".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (
  dispatch
): MatchesTournamentsScreenDispatchProps => ({});

export class Component extends React.PureComponent<
  MatchesTournamentsScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };
  state = {
    selectedDate: "",
    markedDates: {
      "2019-08-17": { marked: true, dotColor: "blue" }
    }
  };

  getMarkedDates = (selectedDate, markedDates) => {
    if (selectedDate.length) {
      return {
        ...markedDates,
        ...{
          [selectedDate]: {
            ...markedDates[selectedDate],
            selected: true
          }
        }
      };
    } else return markedDates;
  };

  getData = () => {
    const { selectedDate } = this.state;
    return dataTournament.find(item => {
      return item.date === selectedDate;
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Calendar
          markedDates={this.getMarkedDates(
            this.state.selectedDate,
            this.state.markedDates
          )}
          onDayPress={(day, localDay) => {
            this.setState({ selectedDate: day.dateString });
          }}
          style={styles.calendar}
        />
        {this.getData() ? (
          this.getData().data.map((item, i) => {
            return (
              <View key={i} style={styles.card}>
                <View style={styles.headerCard}>
                  <View>
                    <Text style={styles.statusCard}>
                      {item.status.toUpperCase()}
                    </Text>
                    <Text style={styles.titleCard}>{item.title}</Text>
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.wrapCategory}>
                        <Text style={styles.categoryText}>{item.category}</Text>
                      </View>
                      <Text style={styles.infoText}>
                        {item.round.toUpperCase() + ", " + item.date}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.headerCardRate}>
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../../../assets/coin-color.png")}
                      resizeMode="contain"
                    />
                    <Text style={styles.headerCardRateText}>{item.coins}</Text>
                  </View>
                </View>
                <MatchItem
                  compatitors={item.compatitors}
                  inside={true}
                  style={{
                    marginRight: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    paddingLeft: 25
                  }}
                />
              </View>
            );
          })
        ) : (
          <Text style={styles.noDataText}>No Data</Text>
        )}
      </ScrollView>
    );
  }
}

export const MatchesTournamentsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
