import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo";

import { ButtonHeaderStyledProps } from "./";
import styles from "./ButtonHeaderStyled.styles";
import {
  colorGradientBlue,
  colorGradientGreen,
  colorStartButtonInput,
  colorEndButtonInput
} from "../../variables";

export const ButtonHeaderStyled: React.SFC<ButtonHeaderStyledProps> = ({
  onPress = () => {},
  text = "",
  style = ""
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.btn].concat(style)}
      onPress={() => onPress()}
    >
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={[colorStartButtonInput, colorEndButtonInput]}
        style={styles.btnGradient}
      >
        <Text style={styles.btnText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
