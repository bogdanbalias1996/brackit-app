import * as React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { SelectCustom } from "../../components/SelectCustom/SelectCustom";
import { LeaderBoardItem } from "./";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";
import { colorShadow, colorBlack, colorBorderBlue } from "../../variables";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<LeaderBoardItem> {
  renderItem = ({ item, index }) => {
    const {
      name,
      number,
      avatar,
      avatarRate,
      numberPlays,
      numberWonPlays,
      performance
    } = item as LeaderBoardItem;

    return (
      <View style={[styles.card, { marginTop: index == 0 ? 10 : 0 }]}>
        <View style={styles.cardLeft}>
          <Text style={styles.cardNumber}>{number}</Text>
          <AvatarStatus avatar={avatar} avatarRate={avatarRate} size={36} />
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardRight}>
          <Text style={styles.cardNumber}>
            {numberPlays + "/" + numberWonPlays}
          </Text>
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
        {data.map((item, i) => {
          return (
            item.number === "3" && (
              <View key={i} style={styles.cardFixed}>
                <View style={[styles.cardLeft, { width: "55%" }]}>
                  <Text style={styles.cardNumber}>{item.number}</Text>
                  <AvatarStatus
                    avatar={item.avatar}
                    avatarRate={item.avatarRate}
                    size={36}
                  />
                  <Text style={styles.cardName}>{item.name}</Text>
                </View>
                <View
                  style={[
                    styles.cardRight,
                    { alignItems: "flex-start", width: "45%" }
                  ]}
                >
                  <View style={styles.wrapScores}>
                    <Text style={styles.scoreTitle}>played/won</Text>
                    <Text style={styles.cardNumber}>
                      {item.numberPlays + "/" + item.numberWonPlays}
                    </Text>
                  </View>
                  <View style={styles.wrapScores}>
                    <Text style={styles.scoreTitle}>played/won</Text>
                    <View style={styles.wrapPerformance}>
                      <Text style={styles.cardNumber}>{item.performance}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          );
        })}
        <View style={styles.containerSelect}>
          <SelectCustom />
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
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8
  },
  cardFixed: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 10,
    paddingRight: 37,
    marginVertical: 5,
    backgroundColor: "white",
    shadowColor: colorShadow,
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
    justifyContent: "space-between",
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
    marginBottom: 10
  },
  wrapScores: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  containerSelect: {
    alignItems: "flex-end",
    position: "relative",
    paddingRight: 25
  }
});
