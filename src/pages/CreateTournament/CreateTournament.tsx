import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "react-native-modal-datetime-picker";
import { format } from "date-fns";

import { navigate } from "../../navigationService";
import { TextInputIconStyled } from "../../components/TextInputStyled/TextInputIconStyled";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import {
  CreateTournamentScreenProps,
  CreateTournamentScreenDispatchProps
} from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./CreateTournament.styles";
import { colorBlack, colorGradientBlue } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity
          style={styles.iconCancel}
          onPress={() => {
            navigate({ routeName: "Play" });
          }}
        >
          <Icon size={24} name="cancel" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Tournament INFO".toUpperCase()}
  />
);

const mapStateToProps = state => ({});
const mapDispatchToProps = (
  dispatch
): CreateTournamentScreenDispatchProps => ({});

export class Component extends React.PureComponent<
  CreateTournamentScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    isStartDatePickerVisible: false,
    isEndDatePickerVisible: false,
    isCloseDatePickerVisible: false
  };

  ifExist = (array, obj): any => {
    if (array.find(x => x.id === obj.id)) {
      return true;
    }
  };

  handleSubmit = values => {
    console.log(values);
  };

  render() {
    const events = [
      {
        id: "1",
        value: "U10"
      },
      {
        id: "2",
        value: "U15"
      },
      {
        id: "3",
        value: "U17"
      },
      {
        id: "4",
        value: "CD1"
      },
      {
        id: "5",
        value: "BS1"
      },
      {
        id: "6",
        value: "WD2"
      },
      {
        id: "7",
        value: "XD8"
      }
    ];
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <Formik
          initialValues={{
            tournamentName: "",
            tournamentAddress: "",
            tournamentPrize: "",
            tournamentStartDate: "",
            tournamentEndDate: "",
            tournamentEvents: events,
            tournamentEntrySingle: "",
            tournamentEntryDouble: "",
            tournamentEntryCloseDate: "",
            tournamentPersonName: "",
            tournamentPersonPhone: "",
            tournamentPersonEmail: ""
          }}
          onSubmit={this.handleSubmit}
        >
          {(props: any) => {
            const { handleSubmit, values, setFieldValue } = props;

            return (
              <View>
                <TextInputIconStyled
                  name="tournamentName"
                  placeholder="Enter tournament title"
                  label="tournament title"
                  formProps={props}
                />
                <TextInputIconStyled
                  name="tournamentAddress"
                  placeholder="Enter tournament address"
                  label="venue & address"
                  iconName="location"
                  formProps={props}
                />
                <TextInputIconStyled
                  name="tournamentPrize"
                  placeholder="Enter prize money"
                  keyboardType="numeric"
                  label="prize money"
                  iconName="cup"
                  formProps={props}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%"
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ isStartDatePickerVisible: true })
                      }
                    >
                      <TextInputIconStyled
                        name="tournamentStartDate"
                        pointerEvents="none"
                        editable={false}
                        placeholder="Start date"
                        label="tournament start date"
                        iconName="calendar"
                        formProps={props}
                      />
                    </TouchableOpacity>
                    <DateTimePicker
                      mode="date"
                      isVisible={this.state.isStartDatePickerVisible}
                      onConfirm={date => {
                        this.setState({ isStartDatePickerVisible: false });
                        setFieldValue(
                          "tournamentStartDate",
                          format(date, "DD MMM YYYY")
                        );
                      }}
                      onCancel={() =>
                        this.setState({ isStartDatePickerVisible: false })
                      }
                    />
                  </View>
                  <View style={{ width: "50%" }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({ isEndDatePickerVisible: true })
                      }
                    >
                      <TextInputIconStyled
                        pointerEvents="none"
                        editable={false}
                        name="tournamentEndDate"
                        label="tournament end date"
                        iconName="calendar"
                        placeholder="End date"
                        formProps={props}
                      />
                    </TouchableOpacity>
                    <DateTimePicker
                      mode="date"
                      isVisible={this.state.isEndDatePickerVisible}
                      onConfirm={date => {
                        this.setState({ isEndDatePickerVisible: false });
                        setFieldValue(
                          "tournamentEndDate",
                          format(date, "DD MMM YYYY")
                        );
                      }}
                      onCancel={() =>
                        this.setState({ isEndDatePickerVisible: false })
                      }
                    />
                  </View>
                </View>
                <View style={styles.eventsItem}>
                  <Text style={styles.labelText}>events</Text>
                  <View style={styles.eventsWrap}>
                    {values.tournamentEvents.map((item, i) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            item.selected
                              ? (item.selected = false)
                              : (item.selected = true);
                            setFieldValue(
                              "tournamentEvents",
                              values.tournamentEvents
                            );
                          }}
                          key={i}
                          style={[
                            styles.eventItem,
                            {
                              backgroundColor: item.selected
                                ? colorGradientBlue
                                : "white"
                            }
                          ]}
                        >
                          <Text
                            style={[
                              styles.eventItemText,
                              { color: item.selected ? "white" : colorBlack }
                            ]}
                          >
                            {item.value}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%"
                  }}
                >
                  <View style={{ width: "50%" }}>
                    <TextInputIconStyled
                      name="tournamentEntrySingle"
                      placeholder="Singles"
                      keyboardType="numeric"
                      label="singles entry fee"
                      iconName="coin-black"
                      formProps={props}
                    />
                  </View>
                  <View style={{ width: "50%" }}>
                    <TextInputIconStyled
                      name="tournamentEntryDouble"
                      placeholder="Doubles"
                      keyboardType="numeric"
                      label="doubles entry fee"
                      iconName="coin-black"
                      formProps={props}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({ isCloseDatePickerVisible: true })
                  }
                >
                  <TextInputIconStyled
                    name="tournamentEntryCloseDate"
                    placeholder="Choose entry close date"
                    pointerEvents="none"
                    editable={false}
                    label="entry close date"
                    iconName="calendar"
                    formProps={props}
                  />
                </TouchableOpacity>
                <DateTimePicker
                  mode="date"
                  isVisible={this.state.isCloseDatePickerVisible}
                  onConfirm={date => {
                    this.setState({ isCloseDatePickerVisible: false });
                    setFieldValue(
                      "tournamentEntryCloseDate",
                      format(date, "DD MMM YYYY")
                    );
                  }}
                  onCancel={() =>
                    this.setState({ isCloseDatePickerVisible: false })
                  }
                />
                <TextInputIconStyled
                  name="tournamentPersonName"
                  placeholder="Enter contact person name"
                  label="name"
                  iconName="person"
                  formProps={props}
                />
                <TextInputIconStyled
                  name="tournamentPersonPhone"
                  placeholder="Enter contact phone"
                  label="phone"
                  iconName="phone"
                  keyboardType="phone-pad"
                  formProps={props}
                />
                <TextInputIconStyled
                  name="tournamentPersonEmail"
                  placeholder="Enter contact email"
                  keyboardType="email-address"
                  label="email"
                  iconName="envelope"
                  formProps={props}
                />
                <ButtonStyled
                  style={styles.btnNext}
                  onPress={() => {
                    handleSubmit(values);
                  }}
                  text={"Post tournament".toUpperCase()}
                />
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    );
  }
}

export const CreateTournamentScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
