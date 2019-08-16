import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../Icon/Icon";
import { colorTextGray, colorBorder } from "../../variables";
import { navigate } from "../../navigationService";

import { TabListItemProps } from "./";

const TabListItem = ({ item, index }): JSX.Element => {
  const { title, component } = item as TabListItemProps;
  return (
    <TouchableOpacity
      style={[styles.tabListItem, { borderTopWidth: index === 0 ? 1 : 0 }]}
      onPress={() =>
        navigate({ routeName: component, params: { title: title } })
      }
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
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderColor: colorBorder,
    borderBottomWidth: 1
  },
  tabListItemText: {
    fontFamily: "montserrat-semibold",
    fontSize: 16
  }
});

export default TabListItem;
