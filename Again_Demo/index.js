/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import WelcomePage from "./js/page/WelcomePage";
import AppNavigator from "./js/navigator/AppNavigator";
import {createAppContainer} from 'react-navigation'


const AppStackNavigatorContainer = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
