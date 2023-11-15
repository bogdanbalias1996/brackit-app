import * as React from "react";
import { View } from "react-native";
import { IconSvgProps } from "./";
import SvgUri from "expo-svg-uri";

export const IconSvg: React.SFC<IconSvgProps> = ({
  width = 24,
  height = 24,
  name,
  style
}): JSX.Element => {
  return (
    <View style={style || {}}>
      <SvgUri
        showWebviewLoader={false}
        width={width}
        height={height}
        source={name}
      />
    </View>
  );
};
