/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Textinputs from './components/design/Textinputs';
import Flatlist from './components/design/Flatlist';
import ComponentA from './components/context api/ComponentA';
import UseReducer from './components/hooks/UseReducer';
import UseRef from './components/hooks/UseRef';
import UseCallbackk from './components/hooks/UseCallbackk';
import Usememoo from './components/hooks/Usememoo';
import Usefocus from './components/hooks/Usefocus';
import Uselayouteffect from './components/hooks/Uselayouteffect';
import useWindowDimensions from './components/hooks/useWindowDimensions';

AppRegistry.registerComponent(appName, () => useWindowDimensions);
