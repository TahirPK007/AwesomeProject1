import { View, Text, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const Signup = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

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
                    value={name}
                    onChangeText={(value) => setname(value)}
                />
                <TextInput
                    placeholder='enter your name'
                    value={name}
                    onChangeText={(value) => setname(value)}
                />
            </View>
            <View>
                <Button
                title='continue'
                />
            </View>
        </View>
    )
}

export default Signup