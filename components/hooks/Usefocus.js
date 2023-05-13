import {View, Text} from 'react-native';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

const Usefocus = () => {
  //it allows you to run an effect when the screen component gains focus and clean it up when the screen loses focus. It is typically used for handling screen-specific side effects or fetching data when a screen becomes active.
  useFocusEffect(
    React.useCallback(() => {
      // Run this effect when the screen gains focus

      // Perform any side effects or fetch data here

      return () => {
        // Clean up the effect when the screen loses focus
      };
    }, []),
  );
  return (
    <View>
      <Text>Usefocus</Text>
    </View>
  );
};

export default Usefocus;
