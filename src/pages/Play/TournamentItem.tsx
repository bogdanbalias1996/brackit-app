import * as React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

import { TournamentItem } from "./";
import { Icon } from "../../components/Icon/Icon";
import {
  colorShadow,
  colorTextGray,
  colorBlack,
  colorGradientBlue,
  colorOrangeText
} from "../../variables";

export const renderItem = ({ item }) => {
  const {
    avaliableEntries,
    entries,
    statusTournament,
    title,
    subTitle,
    whenText,
    whereText,
    prize,
    singleEntryFee,
    doubleEntryFee,
    categories
  } = item as TournamentItem;

  return (
    <View style={styles.card}>
      <View style={styles.triangleShape} />
      <View style={styles.wrapTopContent}>
        <Text style={styles.status}>{statusTournament.toUpperCase()}</Text>
        <View style={styles.wrapEntries}>
          <View style={styles.entry}>
            <Image
              style={{ width: 20 }}
              source={require("../../../assets/coin-color.png")}
              resizeMode="contain"
            />
            <Text style={styles.entryText}>{avaliableEntries}</Text>
          </View>
          <View style={styles.entry}>
            <Image
              style={{ width: 20 }}
              source={require("../../../assets/coin-color.png")}
              resizeMode="contain"
            />
            <Text style={styles.entryText}>{entries}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubTitle}>{subTitle}</Text>
      <View style={styles.questionItem}>
        <Icon
          size={16}
          style={styles.questionIcon}
          name="location"
          color={colorTextGray}
        />
        <Text style={styles.answerText}>{whereText}</Text>
      </View>
      <View style={styles.questionItem}>
        <Icon
          size={16}
          style={styles.questionIcon}
          name="calendar"
          color={colorTextGray}
        />
        <Text style={styles.answerText}>{whenText}</Text>
      </View>
      <View style={styles.questionItem}>
        <Icon
          size={16}
          style={styles.questionIcon}
          name="cup"
          color={colorTextGray}
        />
        <Text style={styles.qestionText}>prize money</Text>
        <Text style={styles.entryFeeText}>{prize + " INR"}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.questionItem}>
          <Icon
            size={16}
            style={styles.questionIcon}
            name="coin-black"
            color={colorTextGray}
          />
          <Text style={styles.qestionText}>singles entry fee</Text>
          <Text style={styles.prizeText}>{singleEntryFee + " coins"}</Text>
        </View>
        <View style={styles.questionItem}>
          <Icon
            size={16}
            style={styles.questionIcon}
            name="coin-black"
            color={colorTextGray}
          />
          <Text style={styles.qestionText}>doubles entry fee</Text>
          <Text style={styles.prizeText}>{doubleEntryFee + " coins"}</Text>
        </View>
      </View>
      <View style={styles.eventsItem}>
        <Text style={styles.qestionText}>events</Text>
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
  wrapTopContent: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  wrapEntries: {
    flexDirection: "row"
  },
  entry: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center"
  },
  entryText: {
    fontSize: 10,
    fontFamily: "montserrat-medium",
    color: colorBlack,
    marginLeft: 5
  },
  status: {
    fontSize: 10,
    fontFamily: "montserrat-bold",
    color: colorBlack,
    marginBottom: 5
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginTop: 5
  },
  cardSubTitle: {
    fontSize: 10,
    fontFamily: "montserrat-medium",
    color: colorBlack
  },
  questionItem: {
    marginVertical: 5,
    paddingLeft: 25,
    position: "relative",
    paddingRight: 15
  },
  eventsItem: {
    marginVertical: 5,
    paddingRight: 15
  },
  questionIcon: {
    position: "absolute",
    top: 0,
    left: 0
  },
  qestionText: {
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  },
  answerText: {
    fontSize: 13,
    fontFamily: "montserrat-medium",
    color: colorBlack
  },
  prizeText: {
    fontFamily: "montserrat-semibold",
    fontSize: 14,
    color: colorOrangeText
  },
  entryFeeText: {
    fontFamily: "montserrat-semibold",
    fontSize: 14,
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
