import * as React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AvatarStatusProps } from "./";
import styles from "./AvatarStatus.styles";
import { getColorsByScore, getSkillLevel } from "../../utils/skillLevel";

export const AvatarStatus: React.FunctionComponent<AvatarStatusProps> = ({
  avatar,
  avatarRate,
  size = 50
}): JSX.Element => {
  return (
    <View style={styles.avatarWrap}>
      {typeof avatar === "number" ? (
        <Image
          style={{ width: size, height: size, borderRadius: size / 2 }}
          source={avatar}
          resizeMode="cover"
        />
      ) : (
        <View style={{ flexDirection: "row" }}>
          {avatar &&
            avatar.map((item, i) => {
              return (
                <Image
                  key={i}
                  style={[
                    {
                      width: size,
                      height: size,
                      borderRadius: size / 2,
                      borderWidth: 2,
                      borderColor: "white"
                    },
                    { marginLeft: i === 1 ? -15 : 0 }
                  ]}
                  source={item.avatar}
                  resizeMode="cover"
                />
              );
            })}
        </View>
      )}
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
