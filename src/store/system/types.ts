import { ColorSchemeName } from "react-native";

export type NextScreenAction = {
  type: 'press/next_screen';
};

export type PrevScreenAction = {
  type: 'press/prev_screen';
};

export type LoadSchemeAction = {
  type: 'load/color_scheme';
  payload: ColorSchemeName;
}

export type SystemActions = NextScreenAction
  | PrevScreenAction
  | LoadSchemeAction;
