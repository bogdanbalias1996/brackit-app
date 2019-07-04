import * as React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Icon } from "../../components/Icon/Icon";
import { colorVeryLightBlue, colorTextGray } from "../../variables";

type SearchBarProps = {
  onChangeText: (searchText) => void;
};

export const SearchBar = (props: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={"Search..."}
        autoCorrect={false}
        numberOfLines={1}
        placeholderTextColor={colorTextGray}
        onChangeText={props.onChangeText}
      />
      <Icon name="search" color={colorTextGray} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorVeryLightBlue,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    marginBottom: 15,
    marginHorizontal: 25,
    position: "relative"
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 8
  },
  input: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 35,
    fontFamily: "montserrat-medium",
    fontSize: 12,
    color: colorTextGray
  }
});
