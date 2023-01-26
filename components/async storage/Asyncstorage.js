import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


let names = []
let obj = { name: "ali", age: "20" }
let obj2 = { name: "zia", age: "21", gender: "male" }
//now name will get replaced ali=zia and age=21 and gender will be added 
const Asyncstorage = () => {

    const [data, setdata] = useState('')



    const savedata = async () => {
        // 2- names.push(data);

        // 5- setting multiple data
        let name1 = ["name", "a"];
        let name2 = ["name", "b"];

        try {
            // 1-storing single string value
            await AsyncStorage.setItem('my', data)

            // 2- stroing data in array
            // await AsyncStorage.setItem('my', JSON.stringify(names))

            // 3- saving object
            //await AsyncStorage.setItem('my', JSON.stringify(obj))

            // 4- mergin one object with another object
            //await AsyncStorage.setItem('my', JSON.stringify(obj2))

            // 5- setting multiple data
            //await AsyncStorage.multiSet([name1, name2])

        } catch (e) {
            alert(e)
        }
        alert('Done.')
    }


    const getData = async () => {
        try {
            //gettting single set value
            const value = await AsyncStorage.getItem('my')

            //getting multiple set value
            //const value = await AsyncStorage.multiGet(["a", "b"])
            if (value !== null) {
                alert(value)
            }
        } catch (e) {
            alert(e);
        }
    }


    const clear = async () => {
        try {
            await AsyncStorage.removeItem('my')
        } catch (e) {
            alert(e)
        }

        alert('Done.')
    }


    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            alert(e);
        }

        alert('Done.')
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text>Asyncstorage</Text>
            <TextInput
                style={{ width: "50%", }}
                placeholder='enter data'
                value={data}
                onChangeText={(value) => setdata(value)}
            />
            <TouchableOpacity style={{ height: 50, width: "50%", backgroundColor: "green", justifyContent: "center", alignItems: "center" }}
                onPress={savedata}
            >
                <Text>Save data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, marginTop: 50, width: "50%", backgroundColor: "green", justifyContent: "center", alignItems: "center" }}
                onPress={getData}
            >
                <Text>Get data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, marginTop: 50, width: "50%", backgroundColor: "green", justifyContent: "center", alignItems: "center" }}
                onPress={clear}
            >
                <Text>clear data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, marginTop: 50, width: "50%", backgroundColor: "green", justifyContent: "center", alignItems: "center" }}
                onPress={clearAll}
            >
                <Text>clear data</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Asyncstorage