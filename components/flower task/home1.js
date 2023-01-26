import { View, Text, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const home1 = ({ navigation }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');


  const signup = () => {
    navigation.navigate("Signup");
  }

  const login = async () => {
    await fetch(`http://10.0.2.2/ecom%20api/api/Flower/Loginn?email=${email}&password=${password}`, {
      method: 'POST',
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if(json==="successfully logged in")
        navigation.navigate("imageapifetch")
        else
        alert("wrong input")
      });
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
          onPress={login}
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