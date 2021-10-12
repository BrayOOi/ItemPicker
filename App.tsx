import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import ItemListScreen from './src/screens/ItemListScreen';
import { store, persistor } from './src/store';

const App = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? "#eee" : "#ddd",
    flex: 1,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle={!isDarkMode ? 'light-content' : 'dark-content'} />
            <ItemListScreen />
          </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
