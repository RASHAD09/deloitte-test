import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { RootNavigator } from './navigation';
import { strings } from './localization';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

 function App() {
  const handleStoreRehydration = () => {
    const { accessToken } = store.getState().user;

    strings.setLanguage(store.getState().user.language ||'en' )
    

  };

  return (
    
    <Provider store={store}>
      <PersistGate onBeforeLift={handleStoreRehydration} persistor={persistor}>
        <GestureHandlerRootView style={styles.container}>
          <RootNavigator />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App