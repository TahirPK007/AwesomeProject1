import { View, Text, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const home1 = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');


  const signup=()=>{
    navigation.navigate("Signup");
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>Flower Home</Text>
      <View style={{ width: "100%" }}>
        <TextInput
          placeholder='Enter your email'
          value={email}
          onChangeText={(value) => setemail(value)}
        />
        <TextInput
          placeholder='Enter your password'
          value={password}
          onChangeText={(value) => setpassword(value)}
        />
      </View>
      <View>
        <Button
        title='Login'
        />
        <Button
        title='Sign Up'
        onPress={signup}
        />
      </View>
    </View>
  )
}

export default home1;