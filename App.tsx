import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ItemListScreen from './src/screens/ItemListScreen';
import { store, persistor } from './src/store';

const App = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const backgroundStyle = {
    flex: 1,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={backgroundStyle}>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle={!isDarkMode ? 'light-content' : 'dark-content'} />
            <ItemListScreen />
          </SafeAreaView>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
