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
      return props.navigation.state.params &&
        props.navigation.state.params.isFirst ? null : (
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
  static navigationOptions = ({ navigation }) => ({
    header: props => <Header {...props} navigation={navigation} />
  });

  state = {
    birthdayDatePickerVisible: false,
    submitBtnText: ""
  };

  _storeData = async () => {
    try {
      await AsyncStorage.setItem("isFirst", "true");
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = async values => {
    const { setChallengeName, navigation } = this.props;

    navigation.state.params &&
      navigation.state.params.isFirst &&
      navigation.setParams({ isFirst: false });
    setChallengeName(values.challengeName);

    if ((await _retrieveData("isFirst")) === null) {
      navigate({ routeName: "AddBuddies", params: { previous: true } });
      this._storeData();
    } else {
      navigate({ routeName: "Profile" });
    }
  };

  getSubmitBtnName = async () => {
    if ((await _retrieveData("isFirst")) === null) {
      this.setState({ submitBtnText: "Next".toUpperCase() });
    } else {
      this.setState({ submitBtnText: "Save".toUpperCase() });
    }
  };

  componentDidMount() {
    this.getSubmitBtnName();
  }

  render() {
    const data = [
      {
        key: 1,
        label: "Cookie Dough - First time playing the sport",
        component: (
          <View>
            <Text style={styles.optionLabel}>Cookie Dough</Text>
            <Text style={styles.optionInfo}>First time playing the sport</Text>
          </View>
        )
      },
      {
        key: 2,
        label: "Healthy Beginner - I know the rules and can play a few strokes",
        component: (
          <View>
            <Text style={styles.optionLabel}>Healthy Beginner</Text>
            <Text style={styles.optionInfo}>
              I know the rules and can play a few strokes
            </Text>
          </View>
        )
      },
      {
        key: 3,
        label: "Social - I play for fun and not to win",
        component: (
          <View>
            <Text style={styles.optionLabel}>Social</Text>
            <Text style={styles.optionInfo}>I play for fun and not to win</Text>
          </View>
        )
      },
      {
        key: 4,
        label: "Intermediate Athlete - Played for at least 3 years",
        component: (
          <View>
            <Text style={styles.optionLabel}>Intermediate Athlete</Text>
            <Text style={styles.optionInfo}>Played for at least 3 years</Text>
          </View>
        )
      },
      {
        key: 5,
        label: "Advanced Athlete - Compete in District, State Circuit",
        component: (
          <View>
            <Text style={styles.optionLabel}>Advanced Athlete</Text>
            <Text style={styles.optionInfo}>
              Compete in District, State Circuit
            </Text>
          </View>
        )
      },
      {
        key: 6,
        label: "Elite Athlete - Compete in National and International Circuit",
        component: (
          <View>
            <Text style={styles.optionLabel}>Elite Athlete</Text>
            <Text style={styles.optionInfo}>
              Compete in National and International Circuit
            </Text>
          </View>
        )
      },
      {
        key: 7,
        label: "Super Hero - Top of my game. Invincible",
        component: (
          <View>
            <Text style={styles.optionLabel}>Super Hero</Text>
            <Text style={styles.optionInfo}>Top of my game. Invincible</Text>
          </View>
        )
      }
    ];
    return (
      <Formik
        initialValues={{
          fullName: "",
          birthdayDate: "",
          trains_at: "",
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
            <View style={{ flex: 1 }}>
              <KeyboardAwareScrollView
                contentContainerStyle={styles.container}
                enableOnAndroid={true}
                keyboardShouldPersistTaps="handled"
              >
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
                  name="trains_at"
                  label="trains at"
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
                  <View style={styles.wrapSelectTitle}>
                    <Text style={styles.selectLabel}>level of play</Text>
                    <Icon name="down" color={colorTextGray} />
                  </View>
                  <View style={styles.wrapModalSelect}>
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
                      style={{ width: "100%" }}
                    />
                  </View>
                </View>
                <TextInputStyled
                  name="bio"
                  label="bio"
                  type="textarea"
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
              </KeyboardAwareScrollView>
              <View style={{ opacity: values.fullName.length ? 1 : 0.2 }}>
                <ButtonStyled
                  style={[
                    styles.btnNext,
                    { elevation: values.fullName.length ? 6 : 0 }
                  ]}
                  onPress={() => {
                    values.fullName.length && handleSubmit();
                  }}
                  text={this.state.submitBtnText}
                />
              </View>
            </View>
          );
        }}
      </Formik>
    );
  }
}

export const ProfileEditScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
