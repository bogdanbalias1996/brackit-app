import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../Icon/Icon";
import { colorTextGray, colorBorder } from "../../variables";
import { navigate } from "../../navigationService";

import { TabListItemProps } from "./";

const TabListItem = ({ item }): JSX.Element => {
  const { title, component } = item as TabListItemProps;
  return (
    <TouchableOpacity
      style={styles.tabListItem}
      onPress={() => navigate({ routeName: component })}
    >
      <Text style={styles.tabListItemText}>{title}</Text>
      <Icon name="next" color={colorTextGray} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderBottomColor: colorBorder,
    borderTopColor: colorBorder,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  tabListItemText: {
    fontFamily: "montserrat-semibold",
    fontSize: 16
  }
});

export default TabListItem;
