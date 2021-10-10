import { ItemType } from '../items/types';
import { SystemActions } from './types';
import produce from 'immer';

const initialState = {
  page: 'home' as 'home' | 'select',
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
    default:
      return initialState;
  }
}
