import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { TournamentDetailScreenProps } from "./";
import { Icon } from "../../components/Icon/Icon";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";
import {
  colorBlack,
  colorTextGray,
  colorBorder,
  colorGreen,
  colorShadow
} from "../../variables";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<
  TournamentDetailScreenProps
> {
  state = {
    showWinners: false
  };

  render() {
    const { item } = this.props;
    const { showWinners } = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({ showWinners: !showWinners })}
          style={[styles.item, { borderBottomWidth: showWinners ? 0 : 1 }]}
        >
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Icon
            size={24}
            name={showWinners ? "down" : "next"}
            color={colorTextGray}
          />
        </TouchableOpacity>
        <View style={styles.matchWrap}>
          {showWinners &&
            item.winners.map((user, i) => (
              <View
                key={i}
                style={[
                  styles.winnerItem,
                  i === 0
                    ? { borderTopRightRadius: 15, borderTopWidth: 1 }
                    : { borderBottomRightRadius: 15 }
                ]}
              >
                {user.winner && <View style={styles.winnerSign} />}
                <View
                  style={[
                    styles.scoresWrap,
                    i === 0 ? { bottom: 0 } : { top: 0 }
                  ]}
                >
                  {user.scores.map((score, i) => (
                    <Text key={i} style={styles.winnerScore}>
                      {score}
                    </Text>
                  ))}
                </View>
                <View style={styles.winnerItemContentWrap}>
                  <AvatarStatus avatar={user.avatar} avatarRate={user.skill} />
                  <View style={styles.winnerItemContent}>
                    <Text style={styles.winnerItemTitle}>{user.name}</Text>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: colorBorder
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: "montserrat-semibold",
    color: colorBlack
  },
  itemTitleNumber: {
    fontSize: 14,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  },
  matchWrap: {
    paddingRight: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4
  },
  winnerItem: {
    paddingHorizontal: 20,
    paddingLeft: 15,
    borderColor: colorBorder,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    position: "relative",
    backgroundColor: "white"
  },
  winnerItemContentWrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5
  },
  winnerSign: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: 5,
    backgroundColor: colorGreen
  },
  winnerItemContent: {
    marginLeft: 15
  },
  winnerItemTitle: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack
  },
  scoresWrap: {
    flexDirection: "row",
    position: "absolute",
    right: 20
  },
  winnerScore: {
    fontSize: 12,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginLeft: 5,
    width: 20,
    textAlign: "center"
  }
});

export const WinnerTabItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
