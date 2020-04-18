/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Router from './app/router'
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <Router/>
    </>
  );
};


export default App;
