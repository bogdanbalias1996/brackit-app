import * as React from "react";
import { TouchableOpacity, Text } from "react-native";

import { ButtonHeaderStyledProps } from "./";
import styles from "./ButtonHeaderStyled.styles";

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
      <Text style={styles.btnText}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};
