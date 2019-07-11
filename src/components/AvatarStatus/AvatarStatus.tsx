import * as React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo";

import { AvatarStatusProps } from "./";
import styles from "./AvatarStatus.styles";
import { colorPinkStart, colorPinkEnd } from "../../variables";
import { getColorsByScore, getSkillLevel } from "../../utils/skillLevel";

export const AvatarStatus: React.FunctionComponent<AvatarStatusProps> = ({
  avatar,
  avatarRate,
  size = 50
}): JSX.Element => {
  return (
    <View style={styles.avatarWrap}>
      <Image
        style={{ width: size, height: size, borderRadius: size / 2 }}
        source={avatar}
        resizeMode="cover"
      />
      <Text style={styles.avatarStatus}>{getSkillLevel(avatarRate)}</Text>
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={getColorsByScore(avatarRate)}
        style={styles.avatarRate}
      >
        <Text style={styles.avatarRateText}>{avatarRate}</Text>
      </LinearGradient>
    </View>
  );
};
