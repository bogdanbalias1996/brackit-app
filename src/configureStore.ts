import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import { IGlobalState, IAction } from "./coreTypes";
import thunk from "redux-thunk";

import { SignUpReducer } from "./pages/SignUp/reducer";
import { FontReducer } from "./common/font.reducer";
import { ChallengeReducer } from "./pages/Play/reducer";

const getReducerObject = () => ({
  SignUpState: SignUpReducer,
  FontState: FontReducer,
  ChallengeState: ChallengeReducer
});

const configureReducers = () =>
  combineReducers<IGlobalState>(getReducerObject());

const rootReducer = (
  state: IGlobalState,
  action: IAction<any>
): IGlobalState => {
  return configureReducers()(state, action);
};

const store = createStore<IGlobalState, any, any, any>(
  rootReducer as any,
  applyMiddleware(thunk)
);

export const getStore = (): Store<IGlobalState> => {
  if (!store) {
    throw new Error(
      "redux store is not defined, use function withAppStore or withMockStore"
    );
  }
  return store;
};
