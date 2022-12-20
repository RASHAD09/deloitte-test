import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['error', 'status'],
};

//thunk ((for debug redux ))
export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk.withExtraArgument({ }))
);
//high order funntion 
export const persistor = persistStore(store);
