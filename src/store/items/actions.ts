import {
  AddItemAction,
  RemoveItemAction,
  SelectItemAction,
  DeselectItemAction,
  ItemType,
} from './types';

export const addItem = (item: Omit<ItemType, 'id'>): AddItemAction => ({
  type: 'input/add_item',
  payload: item,
});

export const removeItem = (id: string): RemoveItemAction => ({
  type: 'swipe/remove_item',
  payload: id,
});

export const selectItem = (id: string): SelectItemAction => ({
  type: 'press/select_item',
  payload: id,
});

export const deselectItem = (id: string): DeselectItemAction => ({
  type: 'press/deselect_item',
  payload: id,
});
