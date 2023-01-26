import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'

const Signup = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const newuser = () => {
        fetch('http://10.0.2.2/ecom%20api/api/Flower/Signup', {
            method: 'POST',
            body: JSON.stringify({
                name: `${name}`,
                email: `${email}`,
                password: `${password}`
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => Alert.alert(json));
    }

    return (
        <View>
            <Text>Signup</Text>
            <View>
                <TextInput
                    placeholder='enter your name'
                    value={name}
                    onChangeText={(value) => setname(value)}
                />
                <TextInput
                    placeholder='enter your name'
                    value={email}
                    onChangeText={(value) => setemail(value)}
                />
                <TextInput
                    placeholder='enter your name'
                    value={password}
                    onChangeText={(value) => setpassword(value)}
                />
            </View>
            <View>
                <Button
                    title='continue'
                    onPress={newuser}
                />
            </View>
        </View>
    )
}

export default Signup