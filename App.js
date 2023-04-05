import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  RefreshControl,
  FlatList,
  TouchableOpacityComponent,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import {openDatabase} from 'react-native-sqlite-storage';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import screenA from './components/screenA';
import screenB from './components/screenB';
import home from './components/home';
import insert from './components/insert';
import search from './components/search';
import update from './components/update';
import deletep from './components/deletep';
import employee from './components/employee';
import homeemp from './components/homeemp';
import employeedata from './components/employeedata';
import quiz1 from './components/quiz1';
import task2 from './components/task2';
import task2data from './components/task2data';
import task3 from './components/task3';
import TakeOrder from './components/TakeOrder';
import NewPizza from './components/NewPizza';
import home1 from './components/flower task/home1';
import imageapifetch from './components/flower task/imageapifetch';
import imagedbapi from './components/flower task/imagedbapi';
import Signup from './components/flower task/Signup';

const Stack = createNativeStackNavigator();
const db = openDatabase({name: 'productdata'});
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home1">
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="imagedbapi" component={imagedbapi} />
        <Stack.Screen name="imageapifetch" component={imageapifetch} />
        <Stack.Screen name="home1" component={home1} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="insert" component={insert} />
        <Stack.Screen name="search" component={search} />
        <Stack.Screen name="update" component={update} />
        <Stack.Screen name="deletep" component={deletep} />
        <Stack.Screen name="homeemp" component={homeemp} />
        <Stack.Screen name="employee" component={employee} />
        <Stack.Screen name="employeedata" component={employeedata} />
        <Stack.Screen name="quiz1" component={quiz1} />
        <Stack.Screen name="task2" component={task2} />
        <Stack.Screen name="task2data" component={task2data} />
        <Stack.Screen name="task3" component={task3} />
        <Stack.Screen name="NewPizza" component={NewPizza} />
        <Stack.Screen name="TakeOrder" component={TakeOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
