import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./LinearGradient.styles";
import { LinearGradientProps } from "./";

export const LinearGradientComponent: React.SFC<LinearGradientProps> = ({
  children,
  colors = ["#883c89", "#403474"]
}): JSX.Element => {
  return (
    <LinearGradient colors={colors} style={styles.gradientContainer}>
      {children}
    </LinearGradient>
  );
};
