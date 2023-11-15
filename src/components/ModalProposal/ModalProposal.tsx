import * as React from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";

import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { ModalProposalProps } from "./";
import styles from "./ModalProposal.styles";

export const ModalProposal: React.SFC<ModalProposalProps> = ({
  onClose,
  visible = false,
  selectedUser,
  onSubmit
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
          <Text style={styles.title}>{"ACCEPT PROPOSAL?".toUpperCase()}</Text>
          <Text style={styles.info}>
            Clicking on Accept is a final action and cannot be withdrawn. Please
            ensure you have reviewed all proposals.
          </Text>
          <View style={styles.wrapButtons}>
            <ButtonStyled
              style={{ marginRight: 20 }}
              onPress={() => {
                onClose();
                onSubmit(selectedUser);
              }}
              text={"Ok".toUpperCase()}
            />
            <ButtonStyled onPress={onClose} text={"Cancel".toUpperCase()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
