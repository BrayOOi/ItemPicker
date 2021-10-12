import produce from 'immer';
import { ColorSchemeName } from 'react-native';

import { SystemActions } from './types';

const initialState = {
  page: 'home' as 'home' | 'select',
  theme: null as ColorSchemeName,
};

export default function systemReducer(
  state = initialState,
  action: SystemActions,
) {
  switch (action.type) {
    case 'press/next_screen':
      return produce(state, draft => {
        if (state.page !== 'select') {
          draft.page = 'select';
        }
      });
    case 'press/prev_screen':
      return produce(state, draft => {
        if (state.page !== 'home') {
          draft.page = 'home';
        }
      });
    case 'load/color_scheme':
      return produce(state, draft => {
        draft.theme = action.payload || 'light'; // default value
      });
    default:
      return state;
  }
}
