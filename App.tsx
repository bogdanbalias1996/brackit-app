import * as React from "react";
import { connect } from "react-redux";
import * as Font from "expo-font";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { getStore } from "./src/configureStore";
import { authenticate } from "./src/common/utils/session";
import { setTopLevelNavigator } from "./src/navigationService";
import { Loader } from "./src/components/Loader/Loader";
import { IGlobalState } from "./src/coreTypes";

import { AuthenticationNavigator } from "./src/navigators/AuthenticationNavigator";
import { MainNavigator } from "./src/navigators/MainNavigator";
import { PagesNavigator } from "./src/navigators/PagesNavigator";

const AppNavigator = createSwitchNavigator(
  {
    Pages: PagesNavigator,
    Auth: AuthenticationNavigator,
    Main: MainNavigator
  },
  {
    initialRouteName: "Auth"
  }
);

const AppContainer = createAppContainer(AppNavigator);

const AppWithFontLoadedComponent = ({ isFontLoaded }) => {
  return (
    <Loader color="#003980" isDataLoaded={isFontLoaded}>
      <AppContainer
        ref={(navigatorRef: any) => {
          setTopLevelNavigator(navigatorRef);
          authenticate();
        }}
      />
    </Loader>
  );
};

const AppWithFontLoaded = connect((state: IGlobalState) => ({
  isFontLoaded: state.FontState.isFontLoaded
}))(AppWithFontLoadedComponent);

export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      "brackit-font": require("./assets/fonts/icon-font/brackit_icons.ttf"),
      "montserrat-medium": require("./assets/fonts/montserrat/Montserrat-Medium.ttf"),
      "montserrat-bold": require("./assets/fonts/montserrat/Montserrat-Bold.ttf"),
      "montserrat-semibold": require("./assets/fonts/montserrat/Montserrat-SemiBold.ttf"),
      "righteous-regular": require("./assets/fonts/righteous/Righteous-Regular.ttf")
    });

    getStore().dispatch({
      type: "FONT_LOADED"
    });
  }

  render() {
    return (
      <Provider store={getStore()}>
        <AppWithFontLoaded />
      </Provider>
    );
  }
}
