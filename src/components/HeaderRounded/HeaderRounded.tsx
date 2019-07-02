import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";

import { Icon } from "../../components/Icon/Icon";
import styles from "./HeaderRounded.styles";
import { goBack } from "../../navigationService";
import { colorEndHeader, colorStartHeader } from "../../variables";

export const HeaderRounded = props => {
  const {
    navigation,
    title,
    style,
    getLeftComponent = null,
    getRightComponent = () => null
  } = props;

  return (
    <LinearGradient
      start={[0, 0.5]}
      end={[1, 0.5]}
      colors={[colorStartHeader, colorEndHeader]}
      style={[styles.container, style || {}]}
    >
      <View style={styles.leftContainer}>
        {getLeftComponent === null && navigation.state.routes.length > 1 && (
          <TouchableOpacity onPress={goBack}>
            <Icon size={25} name={"back"} color={"white"} />
          </TouchableOpacity>
        )}
        {!!getLeftComponent && getLeftComponent()}
      </View>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={styles.rightContainer}>{getRightComponent()}</View>
    </LinearGradient>
  );
};
