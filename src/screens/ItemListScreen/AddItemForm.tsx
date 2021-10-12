import React, { useReducer } from 'react';
import produce from 'immer';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { addItem } from '../../store/items/actions';

import { ItemType } from '../../store/items/types';

import stylesFn from './styles';
import useTheme from '../../hooks/useTheme';

interface AddItemFormProps {
  onAdd: () => void;
}

const initialState = {
  state: {
    isOpen: false,
    canSubmit: false,
  },
  payload: {
    title: '',
    details: '',
    isSelected: false,
  } as Omit<ItemType, 'id'>,
};

const formReducer = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case 'press/expand_form':
      return produce(state, draft => {
        draft.state.isOpen = true;
      });
    case 'press/collapse_form':
      return produce(state, draft => {
        draft.state.isOpen = false;
      });
    case 'input/input_title':
      return produce(state, draft => {
        draft.payload.title = action.payload;

        draft.state.canSubmit = !!action.payload.length;
      });
    case 'input/input_details':
      return produce(state, draft => {
        draft.payload.details = action.payload;
      });
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const AddItemForm: React.FC<AddItemFormProps> = ({
  onAdd,
}) => {
  const [form, localDispatch] = useReducer(formReducer, initialState);
  const dispatch = useDispatch();
  const theme = useTheme();

  const onSubmit = () => {
    if (form.state.canSubmit) {
      localDispatch({ type: 'reset' });
      dispatch(addItem(form.payload));
    } 
  };

  const styles = stylesFn(theme, true);

  if (form.state.isOpen) {
    return (
      <View style={[
        styles.formContainer,
        styles.listItemContainer,
        styles.lastItemContainer,
        ]}>
        <View style={styles.listTitleContainer}>
          <TextInput
            style={styles.formTitle}
            value={form.payload.title}
            onChangeText={text => localDispatch({ type: 'input/input_title', payload: text })}
            placeholder="New Item"
          />
          <View style={styles.listTitleIconContainer}>
            <TouchableOpacity
              style={styles.minusIconContainer}
              onPress={onSubmit}>
              <Icon
                name="check"
                size={30}
                color={theme.dark_shadow}
                style={{ opacity: form.state.canSubmit ? 1 : 0.6 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.minusIconContainer}
              onPress={() => localDispatch({ type: 'press/collapse_form' })}>
              <Icon name="minus" size={30} color={theme.dark_shadow} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listDetailsContainer}>
          <TextInput
            value={form.payload.details}
            onChangeText={text => localDispatch({ 
              type: 'input/input_details',
              payload: text,
            })}
            placeholder="New Item Details"
          />
        </View>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={[
          styles.listItemContainer,
          styles.addIconContainer,
          styles.lastItemContainer,
        ]}
        onPress={() => {
          onAdd();
          localDispatch({ type: 'press/expand_form' });
        }}>
        <Icon name="plus" size={30} color={theme.dark_shadow} />
      </TouchableOpacity>
    );
  }
};

export default AddItemForm;
