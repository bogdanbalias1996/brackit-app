import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { colorBorderBlue } from "../../variables";
import { ProfileStatsItemProps } from ".";
import { LinearGradient } from "expo-linear-gradient";
import { getColorsByScore } from "../../utils/skillLevel";

const ProfileStatsItem: React.FunctionComponent<ProfileStatsItemProps> = ({
  icon,
  points,
  name,
  isSolid = false
}): JSX.Element => {
  const textColor = isSolid ? "white" : "black";

  return (
    <TouchableOpacity
      style={[
        styles.statsItemWrapper,
        isSolid && {
          ...styles.statsItemWrapper__solid,
          shadowColor: getColorsByScore(points)[0]
        }
      ]}
    >
      <LinearGradient
        colors={isSolid ? getColorsByScore(points) : ["white", "white"]}
        style={styles.statsItem}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={icon}
          resizeMode="contain"
        />
        <Text
          style={{
            ...styles.statsItemPoints,
            color: textColor
          }}
        >
          {points}
        </Text>

        <Text style={{ ...styles.statsItemName, color: textColor }}>
          {name}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  statsItemWrapper: {
    alignItems: "center",
    borderColor: colorBorderBlue,
    borderStyle: "solid",
    borderRadius: 12,
    borderWidth: 1
  },

  statsItemWrapper__solid: {
    borderColor: "transparent",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },

  statsItem: {
    alignItems: "center",
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 12,
    minWidth: 76
  },

  statsItemPoints: {
    fontSize: 16,
    paddingVertical: 5,
    fontFamily: "montserrat-semibold"
  },
  statsItemName: { fontSize: 10, fontFamily: "montserrat-semibold" }
});

export default ProfileStatsItem;
