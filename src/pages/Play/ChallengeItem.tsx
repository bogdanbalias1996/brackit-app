import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import { MatchItem } from "../../components/MatchItem/MatchItem";
import { Icon } from "../../components/Icon/Icon";
import {
  colorShadowGray,
  colorTextGray,
  colorBlack,
  colorOrangeText,
  colorVeryLightBlue,
  colorGreen,
  colorBlueEnd
} from "../../variables";
import { navigate } from "../../navigationService";

export const renderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.headerCard}>
        <View>
          <Text style={styles.statusCard}>{item.status.toUpperCase()}</Text>
          <Text style={styles.titleCard}>{item.title}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.wrapCategory}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
            <Text style={styles.infoText}>
              {item.round.toUpperCase() + ",  " + item.date}
            </Text>
          </View>
        </View>
        <View style={styles.headerCardRate}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../../assets/coin-color.png")}
            resizeMode="contain"
          />
          <Text style={styles.headerCardRateText}>{item.coins}</Text>
        </View>
      </View>
      <MatchItem
        compatitors={item.compatitors}
        inside={true}
        style={{
          marginRight: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingLeft: 25
        }}
      />
      <View style={styles.footerCard}>
        <TouchableOpacity
          onPress={() =>
            navigate({
              routeName: "Comments",
              params: { data: item }
            })
          }
          style={styles.wrapIcon}
        >
          <View style={styles.icon}>
            <Icon size={18} name="comment" color={colorTextGray} />
          </View>
          <Text style={styles.iconText}>{item.comments.length}</Text>
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
    paddingVertical: 15,
    marginVertical: 10,
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
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 15,
    marginBottom: 20
  },
  headerCardRate: {
    position: "relative",
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 5
  },
  headerCardRateText: {
    fontFamily: "montserrat-semibold",
    fontSize: 14,
    color: colorOrangeText,
    marginLeft: 5
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: -15,
    paddingRight: 15
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
  },
  statusCard: {
    fontSize: 10,
    fontFamily: "montserrat-bold",
    color: colorGreen
  },
  titleCard: {
    fontSize: 15,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginBottom: 3
  },
  wrapCategory: {
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 7,
    backgroundColor: colorBlueEnd,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  categoryText: {
    fontSize: 12,
    fontFamily: "montserrat-bold",
    color: "white"
  },
  infoText: {
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  }
});
