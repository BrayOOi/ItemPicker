import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import styles from './styles';

const Header: React.FC<{}> = () => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <Svg
      height="180"
      width={windowWidth}
      viewBox={`100 150 ${windowWidth} 150`}>
      <Path
        fill="#333"
        d="M100 150 L100 320 Q200 350 300 300 Q400 250 450 150"
      />
      <View style={styles.header}>
        <Text>Hello World</Text>
      </View>
    </Svg>
  );
};

export default Header;
