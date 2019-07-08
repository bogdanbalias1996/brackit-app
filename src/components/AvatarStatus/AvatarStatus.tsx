import * as React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo";

import { AvatarStatusProps } from "./";
import styles from "./AvatarStatus.styles";
import { colorPinkStart, colorPinkEnd } from "../../variables";

export const AvatarStatus: React.SFC<AvatarStatusProps> = ({
  avatar,
  avatarStatus,
  avatarRate
}): JSX.Element => {
  return (
    <View style={styles.avatarWrap}>
      <Image style={styles.avatar} source={avatar} resizeMode="cover" />
      <Text style={styles.avatarStatus}>{avatarStatus.toUpperCase()}</Text>
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={[colorPinkStart, colorPinkEnd]}
        style={styles.avatarRate}
      >
        <Text style={styles.avatarRateText}>{avatarRate}</Text>
      </LinearGradient>
    </View>
  );
};
