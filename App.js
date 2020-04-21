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
  YellowBox,
  AsyncStorage
} from 'react-native';
import { Provider } from "react-redux";
import {configureStore } from "./app/store/index";
import Router from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import MainNavigator from './app/navigation/MainNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import {Loading} from "./app/components/loading";

const store = configureStore();
YellowBox.ignoreWarnings([
  "Remote debugger",
  "ReactNative.NativeModules.LottieAnimationView.getConstants"
]);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <Provider store={store}>
        <Loading />
         <AppNavigator />
      </Provider>
    )
  }
}