import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ButtonWithEmoji } from "../ButtonWithEmoji/ButtonWithEmoji";
import { ReactionBarProps } from "./";

export const ReactionBar = ({
  blush = 0,
  rage = 0,
  selected,
  onSelect,
  style = {},
  stylesReactionItem = {},
  hideText = false
}: ReactionBarProps) => {
  return (
    <View style={[styles.container, style]}>
      <ButtonWithEmoji
        onPress={() => {
          onSelect("blush");
        }}
        emoji="blush"
        text={blush}
        style={stylesReactionItem}
        selected={selected === "blush"}
        hideText={hideText}
      />
      <ButtonWithEmoji
        onPress={() => {
          onSelect("rage");
        }}
        emoji="rage"
        text={rage}
        style={stylesReactionItem}
        selected={selected === "rage"}
        hideText={hideText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 16
  }
});
