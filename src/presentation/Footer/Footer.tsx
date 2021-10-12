import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import {
  navigateNextScreen,
  navigateHomeScreen,
} from '../../store/system/actions';

import stylesFn from './styles';

import { RootState } from '../../store';
import useTheme from '../../hooks/useTheme';

const Footer: React.FC<{}> = () => {
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const theme = useTheme();
  const { page } = useSelector((state: RootState) => state.system);
  const items = useSelector((state: RootState) => state.items);
  const selectedItems = items.some(item => item.isSelected);

  const isHome = page === 'home';
  const styles = stylesFn(theme, isHome);

  if (isHome) {
    return (
      <TouchableOpacity
        onPress={() => items.length && dispatch(navigateNextScreen)}
        activeOpacity={1}>
        <Svg height="170" width={windowWidth} viewBox={`0 360 350 170`}>
          <Path
            fill={theme.light}
            transform={`scale(${windowWidth/350}, 1.5)`}
            d="M 0 370 L 0 370 Q 110 260 270 250 Q 320 250 350 260 L 350 370 Z"
          />
          <View style={styles.footer}>
            {selectedItems && (
              <Text style={styles.footerText}>Next</Text>
            )}
          </View>
        </Svg>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() => dispatch(navigateHomeScreen)}
        activeOpacity={1}>
        <Svg height="170" width={windowWidth} viewBox={`-300 360 350 170`}>
          <Path
            fill={theme.light}
            transform={`scale(${windowWidth/350}, 1.5) scale(-1, 1)`}
            d="M 0 370 L 0 370 Q 110 260 270 250 Q 320 250 350 260 L 350 370 Z"
          />
          <View style={styles.footer}>
            <Text style={styles.footerText}>Back</Text>
          </View>
        </Svg>
      </TouchableOpacity>
    );
  }
};

export default Footer;
