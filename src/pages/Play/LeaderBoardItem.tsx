import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import { navigate } from "../../navigationService";
import { LeaderBoardItem } from "./";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";
import { colorShadowGray, colorBlack, colorBorderBlue } from "../../variables";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<LeaderBoardItem> {
  renderItem = ({ item, index }) => {
    const {
      name,
      number,
      avatar,
      avatarRate,
      performance
    } = item as LeaderBoardItem;

    return (
      <View style={[styles.card, { marginTop: index == 0 ? 10 : 0 }]}>
        <View style={styles.cardLeft}>
          <Text style={styles.cardNumber}>{number}</Text>
          <AvatarStatus avatar={avatar} avatarRate={avatarRate} size={36} />
          <TouchableOpacity
            onPress={() => navigate({ routeName: "ProfileFriend" })}
          >
            <Text style={styles.cardName}>{name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRight}>
          <View style={styles.wrapPerformance}>
            <Text style={styles.cardNumber}>{performance}</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { data } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.wrapScores}>
          <Text style={styles.scoreTitle}>performance</Text>
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export const LeaderBoardItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginRight: 30,
    backgroundColor: "white",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: colorShadowGray,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.6,
    shadowRadius: 7,
    elevation: 6
  },
  cardFixed: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 10,
    paddingRight: 37,
    marginVertical: 5,
    backgroundColor: "white",
    shadowColor: colorShadowGray,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
    width: "100%"
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    paddingRight: 10
  },
  cardRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "40%"
  },
  cardNumber: {
    fontSize: 13,
    fontFamily: "montserrat-medium",
    color: colorBlack
  },
  cardName: {
    fontSize: 13,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginLeft: 5,
    width: "100%",
    flexShrink: 1
  },
  wrapPerformance: {
    width: 50,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colorBorderBlue,
    borderRadius: 8
  },
  scoreTitle: {
    fontSize: 10,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginLeft: 25
  },
  wrapScores: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 30
  }
});
