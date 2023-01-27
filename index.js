/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Asyncstorage from './components/async storage/Asyncstorage';
import cart from './components/cart';
import imagepicker from './components/imagepicker';
import input from './components/input';
import apifetch from './components/labtask/apifetch';
import quiz from './components/quiz';
import tasklab from './components/tasklab';

AppRegistry.registerComponent(appName, () => Asyncstorage);
