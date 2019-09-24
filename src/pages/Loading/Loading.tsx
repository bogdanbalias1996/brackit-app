import * as React from "react";
import { SafeAreaView } from "react-navigation";
import { ActivityIndicator } from "react-native";

import styles from "./Loading.styles";
import { LoadingScreenProps } from ".";
import { colorBlueStart } from "../../variables";

export class Component extends React.PureComponent<LoadingScreenProps> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={colorBlueStart} />
      </SafeAreaView>
    );
  }
}

export const LoadingScreen = Component;
