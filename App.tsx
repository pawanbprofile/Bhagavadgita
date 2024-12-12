import {View, Text} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
