/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
AppRegistry.registerComponent(appName, () => App);
