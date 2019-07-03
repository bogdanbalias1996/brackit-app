import * as React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

import {
  colorShadow,
  colorTextGray,
  colorPinkStart,
  colorBlack,
  colorGradientBlue,
  colorOrangeText
} from "../../variables";
import { TournamentItem } from "./";

export const renderItem = ({ item }) => {
  const {
    statusTournament,
    title,
    whenText,
    whereText,
    prize,
    entryFee,
    categories
  } = item as TournamentItem;

  return (
    <View style={styles.card}>
      <View style={styles.triangleShape} />
      <Text style={styles.status}>{statusTournament.toUpperCase()}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.questionItem}>
        <View style={styles.itemDot} />
        <Text style={styles.qestionText}>when?</Text>
        <Text style={styles.answerText}>{whenText}</Text>
      </View>
      <View style={styles.questionItem}>
        <View style={styles.itemDot} />
        <Text style={styles.qestionText}>where?</Text>
        <Text style={styles.answerText}>{whereText}</Text>
      </View>
      <View style={styles.questionItem}>
        <View style={styles.itemDot} />
        <Text style={styles.qestionText}>prize money</Text>
        <View style={styles.questionItemContent}>
          <Image
            style={styles.itemIcon}
            source={require("../../../assets/coin2x.png")}
            resizeMode="contain"
          />
          <Text style={styles.prizeText}>{prize}</Text>
        </View>
      </View>
      <View style={styles.questionItem}>
        <View style={styles.itemDot} />
        <Text style={styles.qestionText}>entry fee</Text>
        <View style={styles.questionItemContent}>
          <Image
            style={styles.itemIcon}
            source={require("../../../assets/calendar2x.png")}
            resizeMode="contain"
          />
          <Text style={styles.entryFeeText}>{entryFee}</Text>
        </View>
      </View>
      <View style={styles.questionItem}>
        <View style={styles.itemDot} />
        <Text style={styles.qestionText}>categories</Text>
        <View style={styles.categoriesWrap}>
          {categories.map((item, i) => {
            return (
              <View key={i} style={styles.categoryItem}>
                <Text style={styles.categoryItemText}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export const TournamentItems = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    paddingLeft: 25,
    marginVertical: 10,
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
    elevation: 6,
    position: "relative"
  },
  triangleShape: {
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderRightWidth: 0,
    borderBottomWidth: 25,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "#00BCD4",
    borderRightColor: "#00BCD4",
    borderBottomColor: "transparent",
    position: "absolute",
    top: 0,
    left: 0
  },
  status: {
    fontSize: 10,
    fontFamily: "montserrat-bold",
    color: colorBlack,
    marginBottom: 5
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginTop: 5,
    marginBottom: 15
  },
  questionItem: {
    marginVertical: 8,
    paddingLeft: 8,
    position: "relative"
  },
  itemDot: {
    position: "absolute",
    top: 7,
    left: 0,
    width: 2,
    height: 2,
    borderRadius: 2,
    backgroundColor: colorPinkStart
  },
  qestionText: {
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  },
  answerText: {
    fontSize: 16,
    fontFamily: "montserrat-medium",
    color: colorBlack
  },
  prizeText: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colorOrangeText
  },
  entryFeeText: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colorGradientBlue
  },
  questionItemContent: {
    flexDirection: "row",
    alignItems: "center"
  },
  itemIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
    marginTop: 2
  },
  categoriesWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5
  },
  categoryItem: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colorGradientBlue,
    marginRight: 5,
    marginBottom: 5
  },
  categoryItemText: {
    fontSize: 10,
    fontFamily: "montserrat-bold",
    color: colorBlack
  }
});
