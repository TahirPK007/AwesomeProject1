/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Textinputs from './components/design/Textinputs';
import Flatlist from './components/design/Flatlist';

AppRegistry.registerComponent(appName, () => Flatlist);
