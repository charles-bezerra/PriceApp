/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './routes';
import { AppProvider } from './contexts/app';

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
