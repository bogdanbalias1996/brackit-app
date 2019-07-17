import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { TournamentDetailScreenProps } from "./";
import { Icon } from "../../components/Icon/Icon";
import { MatchItem } from "../../components/MatchItem/MatchItem";
import { colorBlack, colorTextGray, colorBorder } from "../../variables";

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
          <Text style={styles.itemTitle}>{item.value}</Text>
          <Icon
            size={24}
            name={showWinners ? "down" : "next"}
            color={colorTextGray}
          />
        </TouchableOpacity>
        {showWinners && item.finalMatch ? (
          <MatchItem compatitors={item.finalMatch.compatitors} />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 20,
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
  }
});

export const WinnerTabItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
