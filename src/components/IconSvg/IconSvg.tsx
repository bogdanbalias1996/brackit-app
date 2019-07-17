import * as React from "react";
import { IconSvgProps } from "./";
import SvgUri from "expo-svg-uri";

export const IconSvg: React.SFC<IconSvgProps> = ({
  width = 24,
  height = 24,
  name
}): JSX.Element => {
  return <SvgUri width={width} height={height} source={name} />;
};
