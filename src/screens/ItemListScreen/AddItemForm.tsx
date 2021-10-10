import React, { useReducer } from 'react';
import produce from 'immer';
import { TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { addItem } from '../../store/items/actions';

import { ItemType } from '../../store/items/types';

import styles from './styles';

const initialState = {
  state: {
    isOpen: false,
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

const AddItemForm: React.FC<{}> = () => {
  const [form, localDispatch] = useReducer(formReducer, initialState);
  const dispatch = useDispatch();

  const onSubmit = () => {
    localDispatch({ type: 'reset' });
    dispatch(addItem(form.payload));
  };

  if (form.state.isOpen) {
    return (
      <View style={[
        styles.listItemContainer,
        styles.formContainer,
        ]}>
        <View style={styles.listTitleContainer}>
          <TextInput
            value={form.payload.title}
            onChangeText={text => localDispatch({ type: 'input/input_title', payload: text })}
            placeholder="New Item"
          />
          <View style={{flexDirection:'row', gap: 5}}>
            <TouchableOpacity
              style={styles.minusIconContainer}
              onPress={onSubmit}>
              <Icon name="check" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.minusIconContainer}
              onPress={() => localDispatch({ type: 'press/collapse_form' })}>
              <Icon name="minus" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listDetailsContainer}>
          <TextInput
            value={form.payload.details}
            onChangeText={text => localDispatch({ type: 'input/input_details', payload: text })}
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
        ]}
        onPress={() => localDispatch({ type: 'press/expand_form' })}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    );
  }
};

export default AddItemForm;
