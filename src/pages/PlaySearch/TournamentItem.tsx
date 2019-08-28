import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { TournamentItemProps } from "./";
import { Icon } from "../../components/Icon/Icon";
import {
  colorShadowGray,
  colorTextGray,
  colorBlack,
  colorGradientBlue,
  colorOrangeText,
  colorLightGreyBlue
} from "../../variables";
import { navigate } from "../../navigationService";

export const TournamentItem: React.SFC<TournamentItemProps> = ({
  data
}): JSX.Element => {
  const {
    avaliableEntries,
    entries,
    statusTournament,
    title,
    date,
    location,
    prize,
    events
  } = data;

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigate({
            routeName: "TournamentDetail",
            params: { tournamentData: data }
          })
        }
        style={styles.card}
      >
        <View style={styles.triangleShape} />
        <View style={styles.wrapTopContent}>
          <Text style={styles.status}>{statusTournament.toUpperCase()}</Text>
          <View style={styles.wrapEntries}>
            <View style={styles.entry}>
              <Image
                style={{ width: 20 }}
                source={require("../../../assets/court.png")}
                resizeMode="contain"
              />
              <Text style={styles.entryText}>{avaliableEntries}</Text>
            </View>
            <View style={styles.entry}>
              <Image
                style={{ width: 20 }}
                source={require("../../../assets/player.png")}
                resizeMode="contain"
              />
              <Text style={styles.entryText}>{entries}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.questionItem}>
          <Icon
            size={16}
            style={styles.questionIcon}
            name="location"
            color={colorLightGreyBlue}
          />
          <Text style={styles.answerText}>{location}</Text>
        </View>
        <View style={styles.questionItem}>
          <Icon
            size={16}
            style={styles.questionIcon}
            name="calendar"
            color={colorLightGreyBlue}
          />
          <Text style={styles.answerText}>{date}</Text>
        </View>
        <View style={styles.questionItem}>
          <Icon
            size={16}
            style={styles.questionIcon}
            name="cup"
            color={colorLightGreyBlue}
          />
          <Text style={styles.qestionText}>prize money</Text>
          <Text style={styles.entryFeeText}>{prize + " INR"}</Text>
        </View>
        <View style={styles.eventsItem}>
          <Text style={styles.qestionText}>events</Text>
          <View style={styles.categoriesWrap}>
            {events.map((item, i) => {
              return (
                <View key={i} style={styles.categoryItem}>
                  <Text style={styles.categoryItemText}>{item.value}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    paddingTop: 0,
    paddingLeft: 25,
    marginBottom: 15,
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
    elevation: 6,
    position: "relative"
  },
  triangleShape: {
    width: 0,
    height: 0,
    borderLeftWidth: 38,
    borderRightWidth: 0,
    borderBottomWidth: 38,
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
    justifyContent: "space-between",
    alignItems: "flex-end"
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
    color: "#00BCD4"
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginBottom: 5
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
