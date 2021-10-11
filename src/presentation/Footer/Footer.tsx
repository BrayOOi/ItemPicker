import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import {
  navigateNextScreen,
  navigateHomeScreen,
} from '../../store/system/actions';

import styles from './styles';

import { RootState } from '../../store';

const Footer: React.FC<{}> = () => {
  const { page } = useSelector((state: RootState) => state.system);
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();

  const isHome = page === 'home';

  if (isHome) {
    return (
      <TouchableOpacity
        onPress={() => dispatch(navigateNextScreen)}
        activeOpacity={1}>
        <Svg height="130" width={windowWidth} viewBox={`0 240 350 120`}>
          <Path
            fill="#333"
            transform={`scale(${windowWidth/350})`}
            d="M 0 370 L 0 370 Q 110 260 270 250 Q 320 250 350 260 L 350 370 Z"
          />
          <View style={[styles.footer, { justifyContent: 'flex-end' }]}>
            <Text style={styles.footerText}>Next</Text>
          </View>
        </Svg>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => dispatch(navigateHomeScreen)}
        activeOpacity={1}>
        <Svg height="130" width={windowWidth} viewBox={`-350 240 350 120`}>
          <Path
            fill="#333"
            transform={`scale(${windowWidth/350}) scale(-1, 1)`}
            d="M 0 370 L 0 370 Q 110 260 270 250 Q 320 250 350 260 L 350 370 Z"
          />
          <View style={[styles.footer, { justifyContent: 'flex-start' }]}>
            <Text style={styles.footerText}>Back</Text>
          </View>
        </Svg>
      </TouchableOpacity>
    );
  }
};

export default Footer;
