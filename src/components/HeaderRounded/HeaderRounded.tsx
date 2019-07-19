import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";

import { Icon } from "../../components/Icon/Icon";
import styles from "./HeaderRounded.styles";
import { goBack } from "../../navigationService";
import { colorBlueEnd, colorBlueStart } from "../../variables";

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
      colors={[colorBlueStart, colorBlueEnd]}
      style={[styles.container, style || {}]}
    >
      <View style={styles.leftContainer}>
        {getLeftComponent === null && navigation.state.routes.length > 1 && (
          <TouchableOpacity style={styles.back} onPress={goBack}>
            <Icon size={22} name={"left"} color={"white"} />
          </TouchableOpacity>
        )}
        {!!getLeftComponent && getLeftComponent()}

        {title ? <Text style={styles.title}>{title}</Text> : null}
      </View>
      <View style={styles.rightContainer}>{getRightComponent()}</View>
    </LinearGradient>
  );
};
