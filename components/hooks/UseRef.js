import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {useRef} from 'react';

const UseRef = () => {
  const ref = useRef();
  //it creates reference
  //   ref.current.focus()
  //   ref.current.clear()
  return (
    <View>
      <Text>UseRef</Text>
      <TextInput
        style={{width: 300, borderWidth: 1}}
        placeholder="name name name"
        ref={ref}
      />
    </View>
  );
};

export default UseRef;
