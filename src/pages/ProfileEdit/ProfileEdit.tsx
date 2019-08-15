import * as React from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import DateTimePicker from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ModalSelector from "react-native-modal-selector";
import { format } from "date-fns";

import { IGlobalState } from "../../coreTypes";
import { _retrieveData } from "../../common/utils/helpers";
import { navigate, goBack } from "../../navigationService";
import { TextInputStyled } from "../../components/TextInputStyled/TextInputStyled";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { ProfileEditScreenProps, ProfileEditScreenDispatchProps } from ".";
import { setChallengeName } from "./actions";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./ProfileEdit.styles";
import { colorTextGray } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity style={styles.iconCancel} onPress={() => goBack()}>
          <Icon name="left" />
        </TouchableOpacity>
      );
    }}
    title={"Edit profile".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (dispatch): ProfileEditScreenDispatchProps => ({
  setChallengeName: (name: string) => dispatch(setChallengeName(name))
});

export class Component extends React.PureComponent<ProfileEditScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    birthdayDatePickerVisible: false
  };

  _storeData = async () => {
    try {
      await AsyncStorage.setItem("isFirst", "true");
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async values => {
    const { setChallengeName } = this.props;

    setChallengeName(values.challengeName);
    if ((await _retrieveData("isFirst")) === null) {
      navigate({ routeName: "AddBuddies" });
      this._storeData();
    } else {
      navigate({ routeName: "Profile" });
    }
  };

  render() {
    const data = [
      { key: 1, label: "1" },
      { key: 2, label: "2" },
      { key: 3, label: "3" },
      { key: 4, label: "4" },
      { key: 5, label: "5" },
      { key: 6, label: "6" },
      { key: 7, label: "7" },
      { key: 8, label: "8" },
      { key: 9, label: "9" },
      { key: 10, label: "10" },
      { key: 11, label: "11" },
      { key: 12, label: "12" },
      { key: 13, label: "13" },
      { key: 14, label: "14" },
      { key: 15, label: "15" },
      { key: 16, label: "16" },
      { key: 17, label: "17" },
      { key: 18, label: "18" }
    ];
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={{
            fullName: "",
            birthdayDate: "",
            academy: "",
            city: "",
            country: "",
            levelOfPlay: "",
            bio: "",
            email: "",
            phone: "",
            password: ""
          }}
          onSubmit={this.handleSubmit}
        >
          {(props: any) => {
            const { handleSubmit, values, setFieldValue } = props;

            return (
              <View>
                <TextInputStyled
                  borderTop={true}
                  name="fullName"
                  label="full name"
                  formProps={props}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({ birthdayDatePickerVisible: true })
                  }
                >
                  <TextInputStyled
                    name="birthdayDate"
                    pointerEvents="none"
                    editable={false}
                    label="birthday"
                    formProps={props}
                  />
                </TouchableOpacity>
                <DateTimePicker
                  mode="date"
                  isVisible={this.state.birthdayDatePickerVisible}
                  onConfirm={date => {
                    this.setState({ birthdayDatePickerVisible: false });
                    setFieldValue("birthdayDate", format(date, "DD MMM YYYY"));
                  }}
                  onCancel={() =>
                    this.setState({ birthdayDatePickerVisible: false })
                  }
                />
                <TextInputStyled
                  name="academy"
                  label="academy"
                  formProps={props}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%"
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <TextInputStyled
                      name="city"
                      label="city"
                      formProps={props}
                    />
                  </View>
                  <View style={{ width: "50%" }}>
                    <TextInputStyled
                      name="country"
                      label="country"
                      formProps={props}
                    />
                  </View>
                </View>
                <View style={styles.wrapSelect}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text style={styles.selectLabel}>level of play</Text>
                    <Icon name="down" color={colorTextGray} />
                  </View>
                  <ModalSelector
                    data={data}
                    initValue={
                      values.levelOfPlay.length
                        ? values.levelOfPlay
                        : "pick a level"
                    }
                    onChange={option => {
                      this.setState({ coinValue: option.label });
                      setFieldValue("levelOfPlay", option.label);
                    }}
                    cancelStyle={styles.modalCancelStyle}
                    overlayStyle={styles.modalOverlayStyle}
                    cancelTextStyle={styles.modalCancelTextStyle}
                    optionContainerStyle={styles.modalOptionContainer}
                    optionTextStyle={styles.modalOptionTextStyle}
                    selectStyle={styles.selectStyle}
                    selectTextStyle={styles.selectTextStyle}
                    cancelText="Cancel"
                  />
                </View>
                <TextInputStyled
                  name="bio"
                  label="bio"
                  formProps={props}
                  multiline={true}
                  numberOfLines={4}
                />
                <View style={styles.wrapTitle}>
                  <Text style={styles.title}>
                    {"Private information".toUpperCase()}
                  </Text>
                </View>
                <TextInputStyled
                  name="email"
                  label="email"
                  keyboardType="email-address"
                  formProps={props}
                />
                <TextInputStyled
                  name="phone"
                  label="phone"
                  keyboardType="number-pad"
                  formProps={props}
                />
                <TextInputStyled
                  name="password"
                  label="password"
                  keyboardType="numeric"
                  secure={true}
                  formProps={props}
                />
                <View style={{ opacity: values.fullName.length ? 1 : 0.2 }}>
                  <ButtonStyled
                    style={[
                      styles.btnNext,
                      { elevation: values.fullName.length ? 6 : 0 }
                    ]}
                    onPress={() => {
                      values.fullName.length && handleSubmit();
                    }}
                    text={"Save".toUpperCase()}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    );
  }
}

export const ProfileEditScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
