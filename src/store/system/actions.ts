import {
  NextScreenAction,
  PrevScreenAction,
} from './types';

export const navigateNextScreen: NextScreenAction = {
  type: 'press/next_screen',
};

export const navigateHomeScreen: PrevScreenAction = {
  type: 'press/prev_screen',
};
