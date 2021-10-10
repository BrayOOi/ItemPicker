export type NextScreenAction = {
  type: 'press/next_screen';
};

export type PrevScreenAction = {
  type: 'press/prev_screen';
};

export type SystemActions = NextScreenAction
  | PrevScreenAction;
  