import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import useTheme from '../../hooks/useTheme';

import stylesFn from './styles';

const Header: React.FC<{}> = () => {
  const windowWidth = Dimensions.get('window').width;

  const theme = useTheme();
  const styles = stylesFn(theme);

  return (
    <Svg
      height="180"
      width={windowWidth}
      viewBox={`100 150 ${windowWidth} 150`}>
      <Path
        fill={theme.light}
        d="M100 150 L100 320 Q200 350 300 300 Q400 250 450 150"
      />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Item Picker</Text>
      </View>
    </Svg>
  );
};

export default Header;
