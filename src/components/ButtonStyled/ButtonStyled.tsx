import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo";

import { ButtonStyledProps } from "./";
import styles from "./ButtonStyled.styles";
import { colorGradientBlue, colorGradientGreen } from "../../variables";

export const ButtonStyled: React.SFC<ButtonStyledProps> = ({
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
        colors={[colorGradientBlue, colorGradientGreen]}
        style={styles.btnGradient}
      >
        <Text style={styles.btnText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
