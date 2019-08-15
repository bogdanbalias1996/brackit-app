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
import { Icon } from "../../components/Icon/Icon";
import styles from "./MatchesTournaments.styles";

const dataTournament = [
  {
    date: "2019-08-17",
    data: [
      {
        tournamentId: "01",
        tournamentStatus: "super 1000",
        tournamentName: "vs. Kamayana1",
        tournamentLocation:
          "Indonesia Masters Celecom Axiata Badminton tournament",
        tournamentDate: "21 June, 4:00 pm",
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
            value: "WD2"
          }
        ],
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
        tournamentId: "02",
        tournamentStatus: "super 1000",
        tournamentName: "vs. Kamayana",
        tournamentLocation: "YMCA, Sarjapur",
        tournamentDate: "21 June, 4:00 pm",
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
            value: "WD2"
          }
        ],
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
        tournamentId: "01",
        tournamentStatus: "super 1000",
        tournamentName: "Bt. Kamayana",
        tournamentLocation: "YMCA, Sarjapur",
        tournamentDate: "21 June, 4:00 pm",
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
            value: "WD2"
          }
        ],
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
              <View key={i} style={styles.wrapItem}>
                <View style={styles.triangleShape} />
                <View style={styles.itemLeft}>
                  <Text style={styles.nameText}>{item.tournamentName}</Text>
                  <Text style={styles.statusText}>
                    {item.tournamentStatus.toUpperCase()}
                  </Text>
                  <Text style={styles.locationText}>
                    {item.tournamentLocation}
                  </Text>
                  <Text style={styles.smallText}>{item.tournamentDate}</Text>
                </View>
                <View style={styles.itemRight}>
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

export const MatchesTournamentsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
