import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'


const quiz1 = () => {

    const [name, setname] = useState("")
    const [check, setcheck] = useState(false)
    const [result, setresult] = useState("")


    const handler=()=>{
        if(check===true)
        {
            setresult("married")
        }
        else{
            setresult("un-married")
        }
    }

    return (
        <View>
            <Text>enter the nam</Text>
            <TextInput 
            placeholder='enter the name'
            value={name}
            onChangeText={(value)=>{setname(value)}}
            />
            <CheckBox
            value={check}
            onValueChange={(value)=>{setcheck(value)}}
            />
            <Button
            title='check'
            onPress={handler}
            />
            <Text>{name} is {result}</Text>
        </View>
    )
}

export default quiz1;