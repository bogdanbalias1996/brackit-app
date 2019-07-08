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
    avatarStatus,
    postTime,
    postCity,
    coins,
    title,
    whenText,
    whereText,
    shares,
    views,
    comments
  } = item as ChallengeItem;

  return (
    <View style={styles.card}>
      <View style={styles.headerCard}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.avatarWrap}>
            <Image style={styles.avatar} source={avatar} resizeMode="cover" />
            <Text style={styles.avatarStatus}>
              {avatarStatus.toUpperCase()}
            </Text>
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
            style={{ width: 20 }}
            source={require("../../../assets/coin-color.png")}
            resizeMode="contain"
          />
          <Text style={styles.headerCardRateText}>{coins}</Text>
        </View>
      </View>
      <View style={styles.questionItem}>
        <Icon
          size={16}
          style={styles.questionIcon}
          name="play"
          color={colorTextGray}
        />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
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
      <View style={styles.footerCard}>
        <ButtonStyled
          onPress={() => alert("ok")}
          text={"Accept".toUpperCase()}
          type="left"
        />
        <View style={styles.wrapIcons}>
          <TouchableOpacity onPress={() => alert("ok")} style={styles.wrapIcon}>
            <View style={styles.icon}>
              <Icon size={16} name="send" color={colorTextGray} />
            </View>
            <Text style={styles.iconText}>{shares}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("ok")} style={styles.wrapIcon}>
            <View style={styles.icon}>
              <Icon size={24} name="show" color={colorTextGray} />
            </View>
            <Text style={styles.iconText}>{views}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("ok")} style={styles.wrapIcon}>
            <View style={styles.icon}>
              <Icon size={18} name="comment" color={colorTextGray} />
            </View>
            <Text style={styles.iconText}>{comments}</Text>
          </TouchableOpacity>
        </View>
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
    paddingVertical: 15,
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
    elevation: 8
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 15
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
  avatarStatus: {
    fontFamily: "montserrat-semibold",
    fontSize: 8,
    color: colorTextGray,
    textAlign: "center",
    marginTop: 5
  },
  avatarRate: {
    position: "absolute",
    bottom: 10,
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
    fontSize: 14,
    color: colorBlack
  },
  headerCardDate: {
    fontFamily: "montserrat-medium",
    fontSize: 14,
    color: colorTextGray
  },
  rateIcon: {
    marginRight: 5
  },
  headerCardRate: {
    position: "relative",
    marginLeft: 25,
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center"
  },
  headerCardRateText: {
    fontFamily: "montserrat-semibold",
    fontSize: 14,
    color: colorOrangeText,
    marginLeft: 5
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack
  },
  questionItem: {
    marginVertical: 5,
    paddingLeft: 45,
    position: "relative",
    paddingRight: 15
  },
  questionIcon: {
    position: "absolute",
    top: 0,
    left: 20
  },
  answerText: {
    fontSize: 13,
    fontFamily: "montserrat-medium",
    color: colorBlack
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingRight: 15
  },
  wrapIcons: {
    flexDirection: "row"
  },
  wrapIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colorVeryLightBlue,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5
  },
  iconText: {
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  }
});
