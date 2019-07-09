import * as React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

import { IGlobalState } from "../../coreTypes";
import { PlayStepThreeScreenProps } from ".";
import { navigate } from "../../navigationService";
import { PlaceItems } from "./PlaceItem";
import { FavouriteItems } from "./FavouriteItem";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import { Tabs, defaultTabsStyles } from "../../components/Tabs/Tabs";
import styles from "./PlayStepThree.styles";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity
          style={styles.iconCancel}
          onPress={() => navigate({ routeName: "Play" })}
        >
          <Icon size={24} name="cancel" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Choose where".toUpperCase()}
    getRightComponent={() => {
      return (
        <Text style={styles.headerRightText}>{"Step 3/5".toUpperCase()}</Text>
      );
    }}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<PlayStepThreeScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    search: ""
  };

  render() {
    const dataChallange = [
      {
        id: "1",
        title: "Katayama Fumiki",
        avatar: require("../../../assets/illustration2_2x.png"),
        text: "3 kms, 300 INR / hr"
      },
      {
        id: "2",
        title: "Katayama Fumiki",
        avatar: require("../../../assets/avatar.png"),
        text: "3 kms, 300 INR / hr"
      },
      {
        id: "3",
        title: "Katayama Fumiki",
        avatar: require("../../../assets/avatar.png"),
        text: "3 kms, 300 INR / hr"
      },
      {
        id: "4",
        title: "Katayama Fumiki",
        avatar: require("../../../assets/illustration2_2x.png"),
        text: "3 kms, 300 INR / hr"
      },
      {
        id: "5",
        title: "Katayama Fumiki",
        avatar: require("../../../assets/avatar.png"),
        text: "3 kms, 300 INR / hr"
      },
      {
        id: "6",
        title: "Katayama Fumiki",
        avatar: require("../../../assets/avatar.png"),
        text: "3 kms, 300 INR / hr"
      },
      {
        id: "7",
        title: "Katayama Fumiki",
        avatar: require("../../../assets/avatar.png"),
        text: "3 kms, 300 INR / hr"
      }
    ];
    const tabsConfig = [
      {
        title: "My favorites",
        component: () => <FavouriteItems data={dataChallange} />
      },
      {
        title: "Popular",
        component: () => <PlaceItems data={dataChallange} />
      }
    ];
    return (
      <SafeAreaView style={styles.container}>
        <Tabs
          config={tabsConfig}
          activeTabIndex={1}
          style={{ flex: 1 }}
          stylesItem={defaultTabsStyles.roundedTabs}
          stylesTabsContainer={{
            backgroundColor: "transparent",
            marginBottom: 10
          }}
        />
      </SafeAreaView>
    );
  }
}

export const PlayStepThreeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
