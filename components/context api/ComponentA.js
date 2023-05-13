import {View, Text} from 'react-native';
import React from 'react';
import CompB from './CompB';
import {createContext} from 'react';
export const myContext = createContext();
export const emailContext = createContext();
const ComponentA = () => {
  return (
    <myContext.Provider value={'ali khan'}>
      <emailContext.Provider value={'ali@gmail.com'}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>ComponentA</Text>
          {/* <CompB name={'ali'} /> */}
          <CompB />
        </View>
      </emailContext.Provider>
    </myContext.Provider>
  );
};

export default ComponentA;
