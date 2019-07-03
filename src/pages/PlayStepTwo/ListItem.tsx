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

import { colorBorder, colorBlack, colorTextGray } from "../../variables";
import { ListItem } from "./";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { Icon } from "../../components/Icon/Icon";

export const renderItem = ({ item }) => {
  const { name, avatar, address } = item as ListItem;

  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.avatar} source={avatar} resizeMode="cover" />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const ListItems = ({ data, title }) => {
  return (
    <View style={{ flexShrink: 1 }}>
      <Text style={styles.listTitle}>{title}</Text>
      <TouchableOpacity onPress={() => alert("ok")} style={styles.selectAll}>
        <Text style={styles.selectAllText}>Select all</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{ marginBottom: 90 }}
      />
      <LinearGradient
        colors={["rgba(238, 238, 238, 0.2)", "rgba(255, 255, 255, 0)"]}
        style={styles.wrapButton}
      >
        <ButtonStyled onPress={() => alert("ok")} text={"Next".toUpperCase()} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  listTitle: {
    fontFamily: "montserrat-medium",
    fontSize: 14,
    color: colorTextGray,
    paddingHorizontal: 25,
    marginBottom: 15
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: colorBorder,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  name: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colorBlack
  },
  address: {
    fontFamily: "montserrat-medium",
    fontSize: 14,
    color: colorTextGray
  },
  selectAll: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colorBorder,
    borderTopWidth: 1
  },
  selectAllText: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colorBlack,
    textAlign: "center"
  },
  wrapButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20
  }
});
