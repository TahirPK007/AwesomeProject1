import {View, Text} from 'react-native';
import React from 'react';
import CompD from './CompD';

const CompC = ({name}) => {
  return (
    <View>
      <Text>CompC</Text>
      <CompD name={name} />
    </View>
  );
};

export default CompC;
