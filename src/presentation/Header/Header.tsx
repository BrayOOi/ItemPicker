import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header: React.FC<{}> = () => {
  return (
    <View style={styles.header}>
      <Text>Hello World</Text>
    </View>
  );
};

export default Header;
