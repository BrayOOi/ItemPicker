import {
  NextScreenAction,
  PrevScreenAction,
  LoadSchemeAction,
} from './types';
import { ColorSchemeName } from 'react-native';

export const navigateNextScreen: NextScreenAction = {
  type: 'press/next_screen',
};

export const navigateHomeScreen: PrevScreenAction = {
  type: 'press/prev_screen',
};

export const loadColorScheme = (
  colorScheme: ColorSchemeName,
  ): LoadSchemeAction => ({
  type: 'load/color_scheme',
  payload: colorScheme,
});
