import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo";

import {
  colorShadow,
  colorTextGray,
  colorPinkStart,
  colorPinkEnd,
  colorBlack,
  colorOrangeText,
  colorVeryLightBlue
} from "../../variables";
import { ChallengeItem } from "./";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { Icon } from "../../components/Icon/Icon";

export const renderItem = ({ item }) => {
  const {
    name,
    avatar,
    avatarRate,
    postTime,
    postCity,
    postRate,
    title,
    whenText,
    whereText,
    btnText,
    comments
  } = item as ChallengeItem;

  return (
    <View style={styles.card}>
      <View style={styles.headerCard}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarWrap}>
            <Image style={styles.avatar} source={avatar} resizeMode="cover" />
            <LinearGradient
              start={[0, 0.5]}
              end={[1, 0.5]}
              colors={[colorPinkStart, colorPinkEnd]}
              style={styles.avatarRate}
            >
              <Text style={styles.avatarRateText}>{avatarRate}</Text>
            </LinearGradient>
          </View>
          <View>
            <Text style={styles.headerCardTitle}>{name}</Text>
            <Text style={styles.headerCardDate}>
              {postTime + " / " + postCity}
            </Text>
          </View>
        </View>
        <View style={styles.headerCardRate}>
          <Image
            style={styles.rateIcon}
            source={require("../../../assets/coin2x.png")}
            resizeMode="contain"
          />
          <Text style={styles.headerCardRateText}>{postRate}</Text>
        </View>
      </View>
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
      <View style={styles.footerCard}>
        <ButtonStyled onPress={() => alert("ok")} text={btnText} />
        <TouchableOpacity
          onPress={() => alert("ok")}
          style={styles.commentsBlock}
        >
          <View style={styles.commentsIcon}>
            <Icon size={24} name="comment" color={colorTextGray} />
          </View>
          <View>
            <Text style={styles.commentsText}>{comments}</Text>
            <Text style={styles.commentsText}>Comments</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ChallengeItems = ({ data }) => {
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
    elevation: 6
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  avatarWrap: {
    position: "relative",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  avatarRate: {
    position: "absolute",
    bottom: 0,
    width: 40,
    height: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white"
  },
  avatarRateText: {
    fontFamily: "montserrat-semibold",
    fontSize: 10,
    color: "white"
  },
  headerCardTitle: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colorBlack
  },
  headerCardDate: {
    fontFamily: "montserrat-medium",
    fontSize: 14,
    color: colorTextGray
  },
  rateIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
    marginTop: 2
  },
  headerCardRate: {
    position: "relative",
    marginLeft: 25,
    flexDirection: "row"
  },
  headerCardRateText: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colorOrangeText
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
  footerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  commentsBlock: {
    flexDirection: "row",
    alignItems: "center"
  },
  commentsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colorVeryLightBlue,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  },
  commentsText: {
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  }
});
