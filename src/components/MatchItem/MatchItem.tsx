import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { navigate } from "../../navigationService";
import { AvatarStatus } from "../AvatarStatus/AvatarStatus";
import { MatchItemProps } from "./";
import styles from "./MatchItem.styles";

export const MatchItem: React.SFC<MatchItemProps> = ({
  compatitors,
  style = "",
  inside = false
}): JSX.Element => {
  return (
    <View style={[styles.matchWrap].concat(style)}>
      {compatitors.map((team, i) => (
        <View
          key={i}
          style={[
            styles.winnerItem,
            i === 0 && inside
              ? { borderTopRightRadius: 0, borderTopWidth: 0 }
              : i === 1 && inside
              ? { borderBottomRightRadius: 0, borderBottomWidth: 0 }
              : i === 0
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
                  <TouchableOpacity
                    key={i}
                    onPress={() => navigate({ routeName: "ProfileFriend" })}
                  >
                    <Text style={styles.winnerItemTitle}>{player.name}</Text>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
