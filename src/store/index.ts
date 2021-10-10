import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import itemReducer from './items/reducer';
import systemReducer from './system/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['items'],
};

const rootReducer = combineReducers({
  items: itemReducer,
  system: systemReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
