import { View, Text,
TextInput,
 } from 'react-native'
import React from 'react'
import login from './login';

const input = (props) => {
  return (
    <View>
        <TextInput
        placeholder={props.input}
        value={props.value}
        onChangeText={props.abc}

        />
    </View>
  )
}

export default input