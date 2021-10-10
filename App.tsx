import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import ItemListScreen from './src/screens/ItemListScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? "#eee" : "#ddd",
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ItemListScreen />
    </SafeAreaView>
  );
};

export default App;
