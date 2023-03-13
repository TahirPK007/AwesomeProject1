/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Asyncstorage from './components/async storage/Asyncstorage';
import imagepicker from './components/imagepicker';
import input from './components/input';
import apifetch from './components/labtask/apifetch';
import quiz from './components/quiz';
import tasklab from './components/tasklab';
import home1 from './components/flower task/home1';
import datepicker from './components/datepicker';

AppRegistry.registerComponent(appName, () => datepicker);
