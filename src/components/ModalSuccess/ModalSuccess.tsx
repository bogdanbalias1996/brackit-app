import * as React from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import { LinearGradient } from "expo";

import { ModalSuccessProps } from "./";
import { Icon } from "../../components/Icon/Icon";
import styles from "./ModalSuccess.styles";
import { colorGradientBlue, colorGradientGreen } from "../../variables";

export const ModalSuccess: React.SFC<ModalSuccessProps> = ({
  onClose,
  visible = false,
  title
}): JSX.Element => {
  return (
    <Modal
      isVisible={visible}
      style={{ margin: 0 }}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
      <View style={styles.modalWrap}>
        <View style={styles.wrapContent}>
          <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={[colorGradientBlue, colorGradientGreen]}
            style={styles.wrapIcon}
          >
            <Icon size={30} name="check" color="white" />
          </LinearGradient>
          <Text style={styles.title}>{title.toUpperCase()}</Text>
        </View>
      </View>
    </Modal>
  );
};
