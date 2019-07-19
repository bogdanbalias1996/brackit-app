import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colorTextBlue } from "../../variables";
import { Tooltip } from "react-native-elements";
import { ReactionBar } from "../ReactionBar/ReactionBar";
import Emoji from "react-native-emoji";

export type ReactionAddProps = {
  onSelect: (selectedReaction: string) => void;
  text: string;
  emoji: string;
};

export const ReactionAdd = ({
  onSelect = () => {},
  text,
  emoji
}: ReactionAddProps) => {
  return (
    <Tooltip
      backgroundColor="white"
      containerStyle={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.21,
        shadowRadius: 2,

        elevation: 5
      }}
      popover={
        <ReactionBar
          style={{ marginTop: 0 }}
          stylesReactionItem={{
            marginRight: 4,
            marginLeft: 4
          }}
          hideText={true}
          onSelect={onSelect}
        />
      }
      withOverlay={false}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Emoji name={emoji} style={{ fontSize: 24 }} />
      </View>
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontFamily: "montserrat-medium",
    color: colorTextBlue,
    marginRight: 15
  }
});
