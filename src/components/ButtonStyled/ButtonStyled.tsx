import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo";

import { ButtonStyledProps } from "./";
import styles from "./ButtonStyled.styles";
import {
  colorGradientBlue,
  colorGradientGreen,
  colorGoldStart,
  colorGoldEnd,
  colorDisable,
  colorBlack
} from "../../variables";

export const ButtonStyled: React.SFC<ButtonStyledProps> = ({
  onPress = () => {},
  text = "",
  style = "",
  color = "blue",
  shadow = true,
  type
}): JSX.Element => {
  const getTypeButton = type => {
    switch (type) {
      case "left":
        return styles.btnLeft;
      case "right":
        return styles.btnRight;
      case "border":
        return styles.btnBorder;
    }
  };
  const getColorButton = type => {
    switch (type) {
      case "blue":
        return [colorGradientBlue, colorGradientGreen];
      case "gold":
        return [colorGoldStart, colorGoldEnd];
      case "disable":
        return [colorDisable, colorDisable];
      case "white":
        return ["white", "white"];
    }
  };
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        getTypeButton(type),
        shadow && styles.btnShadow
      ].concat(style)}
      onPress={() => onPress()}
    >
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={getColorButton(color)}
        style={[styles.btnGradient, getTypeButton(type)]}
      >
        <Text
          style={[
            styles.btnText,
            { color: color === "white" ? colorBlack : "white" }
          ]}
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
