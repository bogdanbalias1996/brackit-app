import * as React from "react";
import { Text, TouchableOpacity, ScrollView, View, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import { connect } from "react-redux";

import { IGlobalState } from "../../coreTypes";
import { goBack } from "../../navigationService";
import {
  MatchesChallengesScreenProps,
  MatchesChallengesScreenDispatchProps
} from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./MatchesChallenges.styles";

const dataChallenge = [
  {
    date: "2019-08-17",
    data: [
      {
        challengeId: "01",
        challengePrize: "300",
        challengeName: "vs. Kamayana1",
        challengeLocation: "YMCA, Sarjapur",
        challengeDate: "21 June, 4:00 pm",
        compatitors: [
          {
            players: [
              {
                name: "Fua Lamba",
                avatar: require("../../../assets/avatar.png")
              }
            ],
            rating: 1200,
            scores: ["10", "15", "5"]
          },
          {
            players: [
              {
                name: "Fua Lamba1",
                avatar: require("../../../assets/avatar.png")
              }
            ],
            rating: 1000,
            scores: ["8", "10", "10"]
          }
        ]
      },
      {
        challengeId: "02",
        challengePrize: "200",
        challengeName: "vs. Kamayana",
        challengeLocation: "YMCA, Sarjapur",
        challengeDate: "21 June, 4:00 pm",
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
        ]
      }
    ]
  },
  {
    date: "2019-08-18",
    data: [
      {
        challengeId: "01",
        challengePrize: "300",
        challengeName: "Bt. Kamayana",
        challengeLocation: "YMCA, Sarjapur",
        challengeDate: "21 June, 4:00 pm",
        compatitors: [
          {
            players: [
              {
                name: "Fua Lamba",
                avatar: require("../../../assets/avatar.png")
              }
            ],
            rating: 1200,
            scores: ["10", "15", "5"]
          },
          {
            players: [
              {
                name: "Fua Lamba1",
                avatar: require("../../../assets/avatar.png")
              }
            ],
            rating: 1000,
            scores: ["8", "10", "10"]
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
    title={"Matches - Challenges".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (
  dispatch
): MatchesChallengesScreenDispatchProps => ({});

export class Component extends React.PureComponent<
  MatchesChallengesScreenProps
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
    return dataChallenge.find(item => {
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
              <View key={i} style={styles.wrapItem}>
                <View style={styles.itemLeft}>
                  <View style={styles.coinWrap}>
                    <Image
                      style={{ width: 15, height: 15 }}
                      source={require("../../../assets/coin-color.png")}
                      resizeMode="contain"
                    />
                    <Text style={styles.coinText}>{item.challengePrize}</Text>
                  </View>
                  <Text style={styles.nameText}>{item.challengeName}</Text>
                  <Text style={styles.smallText}>{item.challengeLocation}</Text>
                  <Text style={styles.smallText}>{item.challengeDate}</Text>
                </View>
                <View style={styles.itemRight}>
                  <View style={styles.wrapScores}>
                    <View style={{ flexDirection: "row" }}>
                      {item.compatitors[0].scores &&
                        item.compatitors[0].scores.map((item, i) => {
                          return (
                            <Text style={styles.scoreText} key={i}>
                              {item}
                            </Text>
                          );
                        })}
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      {item.compatitors[1].scores &&
                        item.compatitors[1].scores.map((item, i) => {
                          return (
                            <Text style={styles.scoreText} key={i}>
                              {item}
                            </Text>
                          );
                        })}
                    </View>
                  </View>
                  <View style={styles.wrapAvatars}>
                    <View style={{ flexDirection: "row" }}>
                      {item.compatitors[0].players.map((item, i) => {
                        return (
                          <Image
                            key={i}
                            source={item.avatar}
                            resizeMode="cover"
                            style={[
                              {
                                width: 40,
                                height: 40,
                                borderRadius: 40 / 2,
                                borderWidth: 2,
                                borderColor: "white"
                              },
                              { marginLeft: i === 1 ? -15 : 0 }
                            ]}
                          />
                        );
                      })}
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      {item.compatitors[1].players.map((item, i) => {
                        return (
                          <Image
                            key={i}
                            source={item.avatar}
                            resizeMode="cover"
                            style={[
                              {
                                width: 40,
                                height: 40,
                                borderRadius: 40 / 2,
                                borderWidth: 2,
                                borderColor: "white"
                              },
                              { marginLeft: i === 1 ? -15 : 0 }
                            ]}
                          />
                        );
                      })}
                    </View>
                    <View style={styles.wrapVS}>
                      <Text style={styles.textVS}>vs</Text>
                    </View>
                  </View>
                </View>
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

export const MatchesChallengesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
