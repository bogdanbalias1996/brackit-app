import { SignUpState } from "./pages/SignUp/reducer";
import { FontState } from "./common/font.reducer";
import { ChallengeState } from "./pages/Play/reducer";
import { ProfileState } from "./pages/Profile/reducer";

export interface IGlobalState {
  SignUpState: SignUpState;
  FontState: FontState;
  ChallengeState: ChallengeState;
  ProfileState: ProfileState;
}

export interface IAction<T> {
  type: string;
  data: T;
}

export type ObjectWithStrings = { [key: string]: string };
