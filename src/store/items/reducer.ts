import { ItemType, ItemActions } from './types';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

const initialState: Array<ItemType> = [];

export default function itemReducer(
  state = initialState,
  action: ItemActions,
) {
  switch (action.type) {
    case 'input/add_item':
      return produce(state, draft => {
        draft.push({
          ...action.payload,
          id: uuidv4(),
        });
      });
    case 'swipe/remove_item':
      return state.filter(item => item.id !== action.payload);
    case 'press/select_item':
      return produce(state, draft => {
        const selectedItem = draft.find(item => item.id === action.payload);

        if (selectedItem) {
          selectedItem.isSelected = true;
        }
      });
    case 'press/deselect_item':
      return produce(state, draft => {
        const selectedItem = draft.find(item => item.id === action.payload);

        if (selectedItem) {
          selectedItem.isSelected = false;
        }
      });
    case 'swipe/remove_item':
      return produce(state, draft => {
        const deselectedItem = draft.find(item => item.id === action.payload);

        if (deselectedItem) {
          deselectedItem.isSelected = false;
        }
      });
    default:
      return state;
  }
}
