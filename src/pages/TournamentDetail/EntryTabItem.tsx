import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { TournamentDetailScreenProps } from "./";
import { Icon } from "../../components/Icon/Icon";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";
import { colorBlack, colorTextGray, colorBorder } from "../../variables";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<
  TournamentDetailScreenProps
> {
  state = {
    showEnrties: false
  };

  render() {
    const { item } = this.props;
    const { showEnrties } = this.state;
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.setState({ showEnrties: !showEnrties })}
          style={styles.item}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemTitleNumber}>
              {" - " + item.entriesNumber + " entries"}
            </Text>
          </View>
          <Icon
            size={24}
            name={showEnrties ? "down" : "next"}
            color={colorTextGray}
          />
        </TouchableOpacity>
        {showEnrties &&
          item.entries.map((user, i) => (
            <View key={i} style={styles.entryItem}>
              <AvatarStatus avatar={user.avatar} avatarRate={user.skill} />
              <View style={styles.entryItemContent}>
                <Text style={styles.entryItemTitle}>{user.name}</Text>
                <Text style={styles.entryItemSubTitle}>{user.subTitle}</Text>
              </View>
            </View>
          ))}
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
    borderColor: colorBorder,
    borderBottomWidth: 1
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
  entryItem: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    borderColor: colorBorder,
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  entryItemContent: {
    marginLeft: 15
  },
  entryItemTitle: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack
  },
  entryItemSubTitle: {
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  }
});

export const EntryTabItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
