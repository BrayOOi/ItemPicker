export type ItemType = {
  id: string;
  title: string;
  isSelected: boolean;
  details: string;
};

export type AddItemAction = {
  type: 'input/add_item';
  payload: Omit<ItemType, 'id'>;
};

export type RemoveItemAction = {
  type: 'swipe/remove_item';
  payload: ItemType['id'];
};

export type SelectItemAction = {
  type: 'press/select_item';
  payload: ItemType['id'];
};

export type DeselectItemAction = {
  type: 'press/deselect_item';
  payload: ItemType['id'];
};

export type ItemActions = AddItemAction
  | RemoveItemAction
  | SelectItemAction
  | DeselectItemAction;
