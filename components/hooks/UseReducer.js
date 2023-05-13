import {View, Text, Button} from 'react-native';
import React from 'react';
import {useReducer} from 'react';

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase': {
        return state + 1;
      }
      case 'decrese': {
        return state - 1;
      }
      default:
        return state;
    }
  };
  //use reducer is not globally state management
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <View>
      <Text>UseReducer</Text>
      <Text>{counter}</Text>
      <Button
        title="increase"
        onPress={() => {
          dispatch({type: 'increase'});
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          dispatch({type: 'decrese'});
        }}
      />
    </View>
  );
};

export default UseReducer;
