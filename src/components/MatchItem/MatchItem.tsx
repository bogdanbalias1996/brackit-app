import * as React from "react";
import { View, Text } from "react-native";

import { AvatarStatus } from "../AvatarStatus/AvatarStatus";
import { MatchItemProps } from "./";
import styles from "./MatchItem.styles";

export const MatchItem: React.SFC<MatchItemProps> = ({
  compatitors,
  style = ""
}): JSX.Element => {
  return (
    <View style={[styles.matchWrap].concat(style)}>
      {compatitors.map((team, i) => (
        <View
          key={i}
          style={[
            styles.winnerItem,
            i === 0
              ? { borderTopRightRadius: 15, borderTopWidth: 1 }
              : { borderBottomRightRadius: 15 }
          ]}
        >
          {team.isWinner && <View style={styles.winnerSign} />}
          <View
            style={[styles.scoresWrap, i === 0 ? { bottom: 0 } : { top: 0 }]}
          >
            {team.scores &&
              team.scores.map((score, i) => (
                <Text key={i} style={styles.winnerScore}>
                  {score}
                </Text>
              ))}
          </View>
          <View style={styles.winnerItemContentWrap}>
            <AvatarStatus avatar={team.players} avatarRate={team.rating} />
            <View style={styles.winnerItemContent}>
              {team.players &&
                team.players.map((player, i) => (
                  <Text key={i} style={styles.winnerItemTitle}>
                    {player.name}
                  </Text>
                ))}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
