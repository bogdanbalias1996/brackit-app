import * as React from "react";
import { Text, StyleSheet, AsyncStorage } from "react-native";
import { colorDarkGrey } from "../../variables";

export const wrapBoldText = (text: string) => {
  const boldTagRegexp = new RegExp(/(<b>.*?<\/b>)/, "g");
  const blocks = text.split(boldTagRegexp);

  return blocks.map((block, index) => {
    return boldTagRegexp.test(block) ? (
      <Text key={index} style={styles.textBold}>
        {block.replace(/<\/?[^>]+(>|$)/g, "")}
      </Text>
    ) : (
      <Text key={index}>{block}</Text>
    );
  });
};

const styles = StyleSheet.create({
  textBold: {
    color: colorDarkGrey,
    fontFamily: "poppins-semi-bold",
    fontSize: 14,
    marginLeft: 4,
    marginRight: 4
  }
});

export const _retrieveData = async val => {
  const data = await AsyncStorage.getItem(val);
  return data || null;
};
