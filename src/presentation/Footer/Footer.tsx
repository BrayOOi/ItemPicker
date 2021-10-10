import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

import {
  navigateNextScreen,
  navigateHomeScreen,
} from '../../store/system/actions';

import styles from './styles';

import { RootState } from '../../store';

const Footer: React.FC<{}> = () => {
  const { page } = useSelector((state: RootState) => state.system);
  const dispatch = useDispatch();

  const isHome = page === 'home';

  return (
    <View
      style={[
        styles.footer,
        { justifyContent: isHome ? 'flex-end' : 'flex-start' }
      ]}>
      {!isHome && (
        <TouchableOpacity onPress={() => dispatch(navigateHomeScreen)}>
          <Text>Back</Text>
        </TouchableOpacity>
      )}
      {isHome && (
        <TouchableOpacity onPress={() => dispatch(navigateNextScreen)}>
          <Text>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Footer;
