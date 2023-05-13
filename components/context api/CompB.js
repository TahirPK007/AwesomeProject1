import {View, Text} from 'react-native';
import React from 'react';
import CompC from './CompC';

const CompB = ({name}) => {
  return (
    <View>
      <Text>CompB</Text>
      <CompC name={name} />
    </View>
  );
};

export default CompB;
