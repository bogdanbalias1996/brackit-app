import { SignUpState } from "./pages/SignUp/reducer";
import { FontState } from "./common/font.reducer";
import { ChallengeState } from "./pages/Play/reducer";

export interface IGlobalState {
  SignUpState: SignUpState;
  FontState: FontState;
  ChallengeState: ChallengeState;
}

export interface IAction<T> {
  type: string;
  data: T;
}

export type ObjectWithStrings = { [key: string]: string };
