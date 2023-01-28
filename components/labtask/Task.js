import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Task = () => {
  const [num, setnum] = useState(0);

  const increment = () => {
    if (num < 100) setnum(num + 1);
    else setnum(100);
  };

  const decrement = () => {
    if (num > 0) setnum(num - 1);
    else setnum(0);
  };

  return (
    <View style={{flex: 1}}>
      <Text>Task</Text>
      <TextInput
        placeholder="enter the number"
        value={num}
        onChangeText={value => setnum(value)}
      />
      <View style={{width: '90%'}}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={increment}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      {num === 0 ? (
        <Text style={{fontSize: 40, color: 'red'}}>ZERO</Text>
      ) : num > 0 ? (
        <Text style={{fontSize: 40, color: 'green'}}>{num}</Text>
      ) : (
        <Text style={{fontSize: 40, color: 'red'}}>{num}</Text>
      )}
      <View style={{width: '90%'}}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={decrement}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
